import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ManageProductComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ManageProductComponent],
  exports: [
    RouterModule
]
})
export class ManageProductModule { }
