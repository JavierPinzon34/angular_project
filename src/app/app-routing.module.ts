import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './heroes/pages/agregar/agregar.component';
import { ListadoComponent } from './heroes/pages/listado/listado.component';
import { HomeComponent as HomeUserComponent } from './users/pages/home/home.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AddComponent } from './users/pages/add/add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'heroes-registrar', component: AgregarComponent },
  { path: 'heroes-listado', component: ListadoComponent },
  { path: 'users-listado', component: HomeUserComponent },
  { path: 'users-add', component: AddComponent },
  { path: 'users-edit/:id', component: AddComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
