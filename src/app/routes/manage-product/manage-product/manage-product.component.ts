import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  // ng2Table

  public rows: Array<any> = [];
  public columns: Array<any> = [
      { title: 'Product', name: 'name' },
      { title: 'Company', className: ['office-header', 'text-success'], name: 'office' },
      { title: 'Batch No./Lot No.', name: 'ext' },
      { title: 'Expiry Date', className: 'text-warning', name: 'startDate' },
      { title: 'Packing', name: 'packing' },
      { title: 'Quantity', name: 'quantity' },
      { title: 'Rate', name: 'rate' },
      { title: 'Actions', name: 'actions' }
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;
  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered', 'mb0', 'd-table-fixed'] // mb0=remove margin -/- .d-table-fixed=fix column width
};
  constructor() { }

  ngOnInit() {
  }

}
