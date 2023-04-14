import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'Bienvenida', component: BienvenidaComponent },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Error', component: ErrorComponent
  },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
