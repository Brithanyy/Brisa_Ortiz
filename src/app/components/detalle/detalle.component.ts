import { Component, inject, OnInit } from '@angular/core';
import { Cuchillos } from '../../interface/Cuchillo';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCuchillosService } from '../../services/gestion-cuchillos.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{

  cuchillo : Cuchillos = {id: '', nombre: '', tipo: '', filo: '', material_hoja: '', material_mango: '', longitud: 0, longitud_total: 0};

  ruta = inject(ActivatedRoute);

  redirec = inject(Router);
  
  gestion = inject(GestionCuchillosService);

  form_active : boolean = false;

  formulario : FormGroup;

  constructor(private fb : FormBuilder) {
    this.formulario = this.fb.group({
      'nombre': ['',[Validators.required]],
      'tipo': ['',[Validators.required]],
      'filo': ['',[Validators.required]],
      'material_hoja': ['',[Validators.required]],
      'material_mango': ['',[Validators.required]],
      'longitud': ['',[Validators.required]],
      'longitud_total': ['',[Validators.required]],
    })
  }

  get nombre() { return this.formulario.get('nombre'); }
  get tipo() { return this.formulario.get('tipo'); }
  get filo() { return this.formulario.get('filo'); }
  get material_hoja() { return this.formulario.get('material_hoja'); }
  get material_mango() { return this.formulario.get('material_mango'); }
  get longitud() { return this.formulario.get('longitud'); }
  get longitud_total() { return this.formulario.get('longitud_total'); }

  ngOnInit(): void {
    this.getCuchillo();
  }
  getCuchillo() {
    const id = this.ruta.snapshot.paramMap.get('id');
    const id_string = String(id);
    this.gestion.getCuchillo(id_string).subscribe({
      next: (data) => this.cuchillo = data,
      error: (err) => alert(`Error: ${err}`)
    })
  }

  modificar() {
    this.form_active = true;
  }

  back() {
    this.redirec.navigateByUrl('/lista');
  }
  back2() {
    this.form_active = false;
  }

  modificarFormulario() {
    this.cuchillo = this.formulario.getRawValue();
    const id = this.ruta.snapshot.paramMap.get('id');
    const id_string = String(id);
    this.cuchillo.id = id_string;
    this.gestion.putCuchillo(this.cuchillo.id,this.cuchillo).subscribe({
      next: () => {
        alert("Cuchillo modificado con exito.");
        this.form_active = false;
        this.formulario.reset();
        this.redirec.navigateByUrl('/lista');
      },
      error: (err) => alert(`Error: ${err}`)
    })
  }

}
