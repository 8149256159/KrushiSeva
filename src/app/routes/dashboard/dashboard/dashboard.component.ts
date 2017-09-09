import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  new: boolean = false
  editType: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  saveNewType() {
    this.new = false;
  }
  edit() {
this.editType = true;
  }
}
