import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
const routes: Routes = [
  { path: '', component: ManageProfileComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [ManageProfileComponent],
  exports: [
    RouterModule
]
})
export class ManageProfileModule { }
