import { Routes } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'heroes', component: ListaComponent },
  { path: 'hero/:id', component: DetalleComponent },
];