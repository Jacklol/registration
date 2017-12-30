import { Input, Component, EventEmitter, Output, OnInit } from '@angular/core';
import { PatternValidator, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormValidators } from './formValidators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  template: `<h1 translate>Title</h1>
  <form [formGroup]="textForm" (ngSubmit)="submit($event)">
  <div class="form-group">
            <label  class="label" for="userName" translate  >Name</label>
            <input formControlName="userName" id="userName" type="text" class="form-control" required> 
            <div class="alert alert-danger" *ngIf="(userName.touched && userName.invalid) || (submitting && !userName.dirty)">
              <div *ngIf="userName.errors.required">field can't be empty</div>
              <div *ngIf="userName.errors.minlength">min 2 simbols</div>
              <div *ngIf="userName.errors.maxlength">max 20 simbols</div>
              <div *ngIf="userName.errors.pattern">Only A-Z a-z simbols</div>
            </div>
            <label  class="label" for="userLogin" translate>Login</label>
            <input 
            formControlName="userLogin"
            id="userLogin"
            type="text"
            class="form-control" required> 
            <div class="alert alert-danger" *ngIf="(userLogin.touched && userLogin.invalid) || (submitting && !userLogin.dirty)">
              <div *ngIf="userLogin.errors.required">field can't be empty</div>
              <div *ngIf="userLogin.errors.minlength">min 2 simbols</div>
              <div *ngIf="userLogin.errors.maxlength">max 20 simbols</div>
              <div *ngIf="userLogin.errors.pattern">Only A-Z a-z simbols</div>
            </div>
          <label  class="label" for="userEmail" translate>Email</label>
          <input  formControlName="userEmail" id="userEmail" type="email" class="form-control" required>
          <div class="alert alert-danger" *ngIf="(userEmail.touched && userEmail.invalid) || (submitting && !userEmail.dirty)">
            <div *ngIf="userEmail.errors.required">field can't be empty</div>
            <div *ngIf="userEmail.errors.emailControl">Email must be correct</div>
          </div>
            <div formGroupName="pass">
            <label  class="label" for="userPassword" translate>Password</label>
            <input 
            formControlName="userPassword"
            id="userPassword"
            type="Password"
            class="form-control" required> 
            <div class="alert alert-danger" *ngIf="(userPassword.touched && userPassword.invalid) || (submitting && !userPassword.dirty)">
              <div *ngIf="userPassword.errors.required">field can't be empty</div>
              <div *ngIf="userPassword.errors.minlength">min 4 simbols</div>
              <div *ngIf="userPassword.errors.maxlength">max 20 simbols</div>
            </div>
            <label  class="label" for="userRePass" translate>RePassword</label>
            <input 
            formControlName="userRePass"
            id="userRePass"
            type="Password"
            class="form-control" required> 
            <div class="alert alert-danger" *ngIf="(userRePass.touched && userRePass.invalid) || (submitting && !userRePass.dirty)">
              <div *ngIf="userRePass.errors.required">field can't be empty</div>
              <div *ngIf="userRePass.errors.minlength">min 4 simbols</div>
              <div *ngIf="userRePass.errors.maxlength">max 20 simbols</div>
              <div *ngIf="userRePass.errors.Password">different Password </div>
            </div>
          </div>
        <div class="col-sm-2">
          <button   type="submit" class="btn btn-secondary button" translate>Registration</button>
        </div>  
  </div>
  </form>
    `,
})
export class RegistrationComponent implements OnInit {
  data = null;
  textForm: FormGroup;
  userName: FormControl;
  userEmail: FormControl;
  userLogin: FormControl;
  userPassword: FormControl;
  userRePass: FormControl;
  pass: FormGroup;
  submitting = false;
  constructor(private router: Router) { }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.userName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern("[A-Za-z]*")]);
    this.userEmail = new FormControl('', [Validators.required, FormValidators.emailControl]);
    this.userLogin = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern("[A-Za-z]*")]);
    this.userPassword = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20),]);
    this.userRePass = new FormControl('', [Validators.required, (control: FormControl) => { return FormValidators.Password(control, this.userPassword); }]);
  }
  createForm() {
    this.textForm = new FormGroup({
      userName: this.userName,
      userEmail: this.userEmail,
      userLogin: this.userLogin,
      pass: new FormGroup({
        userPassword: this.userPassword,
        userRePass: this.userRePass,
      }),
    },
    )
  }
  submit(event: Event) {
    event.preventDefault();
    if (this.textForm.invalid) {
      this.submitting = true;
      return false;
    } else {
      this.router.navigate(
        ['/FirstPageComponent', this.userName.value],
      );
    }
  }

}
