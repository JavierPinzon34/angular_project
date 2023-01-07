import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent as HomeUserComponent } from './../users/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: ':id', component: HeroeComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  },
  { path: 'users-listado', component: HomeUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
