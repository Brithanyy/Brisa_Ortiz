import { Component, inject, OnInit } from '@angular/core';
import { Cuchillos } from '../../interface/Cuchillo';
import { GestionCuchillosService } from '../../services/gestion-cuchillos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{

  cuchillos : Cuchillos[] = [];

  gestion = inject(GestionCuchillosService);

  ruta = inject(ActivatedRoute);

  redirec = inject(Router);

  getCuchillosDB() {
    this.gestion.getCuchillos().subscribe({
      next: (data) => {
        this.cuchillos = data;
      },
      error: (err) => alert(`Error: ${err}`)
    })
  }

  ngOnInit(): void {
    this.getCuchillosDB();
  }

  detalle(id : string | undefined) {
    this.redirec.navigate(['detalle', id]);
  }

  eliminarCuchilloDB(id : string | undefined) {
    this.gestion.deleteCuchillo(id).subscribe({
      next: () => {
        alert("Cuchillo eliminado con exito.");
        this.cuchillos = this.cuchillos.filter(cuchillos => cuchillos.id != id);
        this.redirec.navigateByUrl('/lista');
      },
      error: (err) => alert(`Error: ${err}`)
    })
  }

  eliminarCuchillo(id : string | undefined) {
    this.eliminarCuchilloDB(id);
  }


}
