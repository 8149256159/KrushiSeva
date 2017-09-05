import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: ManageProfileComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ManageProfileComponent],
  exports: [
    RouterModule
]
})
export class ManageProfileModule { }
