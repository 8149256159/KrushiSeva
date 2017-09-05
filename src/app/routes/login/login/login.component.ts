import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  valForm: FormGroup;
  toasterConfig: any;
  toasterconfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    showCloseButton: false,
    tapToDismiss: false,
    timeout: 7000
  });
  constructor(fb: FormBuilder,public router: Router,) {
    
    this.valForm = fb.group({
      'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
      'password': [null, Validators.required]
  });
   }

  ngOnInit() {
  }
  submitForm()
  {
    this.router.navigate(['manageproduct']);
  }
}
