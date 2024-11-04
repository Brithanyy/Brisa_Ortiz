import { Routes } from '@angular/router';
import { PageListaComponent } from './pages/page-lista/page-lista.component';
import { PageAgregarComponent } from './pages/page-agregar/page-agregar.component';
import { DetalleComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
    {path: 'lista', component: PageListaComponent},
    {path: 'agregar', component: PageAgregarComponent},
    {path: 'detalle/:id', component: DetalleComponent},
    {path: '', redirectTo: '/lista', pathMatch: 'full'},
    {path: '**', redirectTo: '/lista', pathMatch: 'full'}
];
