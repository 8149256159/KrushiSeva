import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  profileForm: FormGroup;
  edit:boolean = false;
  constructor(fb: FormBuilder) { 
    this.profileForm = fb.group({
      'sometext': ['', Validators.required],
    })
  }

  ngOnInit() {
  }
  editProfile()
  {
this.edit = true;
  }
  saveProfile()
  {
this.edit = false;
  }
}
