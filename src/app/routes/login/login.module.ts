import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
const routes: Routes = [
  { path: '', component: LoginComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule
  ],
  declarations: [LoginComponent],
  exports: [
    RouterModule
]
})
export class LoginModule { }
