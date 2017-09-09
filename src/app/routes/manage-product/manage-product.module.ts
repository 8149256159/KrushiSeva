import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Ng2TableModule } from 'ng2-table/ng2-table';

const routes: Routes = [
  { path: '', component: ManageProductComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TabsModule.forRoot(),
    Ng2TableModule
  ],
  declarations: [ManageProductComponent],
  exports: [
    RouterModule
],
schemas:[NO_ERRORS_SCHEMA]
})
export class ManageProductModule { }
