import { Component, OnInit ,TemplateRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  profileForm: FormGroup;
  edit:boolean = false;
  public bsModalRef: BsModalRef;
  constructor(fb: FormBuilder,private modalService: BsModalService ) { 
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
  changepassword()
  {

  }
  public openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }
}
