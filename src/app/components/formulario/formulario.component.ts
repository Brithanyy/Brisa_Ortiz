import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cuchillos } from '../../interface/Cuchillo';
import { GestionCuchillosService } from '../../services/gestion-cuchillos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  cuchillo : Cuchillos = {id: '', nombre: '', tipo: '', filo: '', material_hoja: '', material_mango: '', longitud: 0, longitud_total: 0};

  formulario : FormGroup

  gestion = inject(GestionCuchillosService);

  redirec = inject(Router);

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


  agregarCuchilloDB() {
    this.cuchillo = this.formulario.getRawValue();

    this.gestion.postCuchillo(this.cuchillo).subscribe({
      next: () => {
        alert('Cuchillo agregado con exito.');
        this.formulario.reset();
        this.redirec.navigateByUrl('lista');
      },
      error: (err) => alert(`Error: ${err}`)
    })
  }

  agregarCuchillo() {
    this.agregarCuchilloDB();
  }

}
