import { Component } from '@angular/core';
import { ListaComponent } from "../../components/lista/lista.component";

@Component({
  selector: 'app-page-lista',
  standalone: true,
  imports: [ListaComponent],
  templateUrl: './page-lista.component.html',
  styleUrl: './page-lista.component.css'
})
export class PageListaComponent {

}
