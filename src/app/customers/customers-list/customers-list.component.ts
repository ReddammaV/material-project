import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogExampleComponent } from '../../dialog-example/dialog-example.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";
import { CanComponentDeactivate } from '../../deactivate.guard';
import { Router, NavigationStart } from '@angular/router';
// service for confirm dialog
import { DialogServiceService } from './dialog-service.service';
// back button
import { PlatformLocation } from '@angular/common';

// Deactivate Guard

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements CanComponentDeactivate, OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  @ViewChild('formGroup', { read: NgForm }) form: any;

  constructor(private dialogService: DialogServiceService, private location: PlatformLocation, private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog) {
    // back button modal
    location.onPopState(() => {
      console.log('pressed back!');
      // confirm("Are you sure to delete ");
    });
    // back button modal
  }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
    // this.cconfirm();
  }

  //refresh
  @HostListener('window:beforeunload', ['$event'])
  public doSomething($event) {
    if (this.formGroup.dirty) {
      // console.log("do I see this?");
      return false;
    } else {
      return true;
    }
  }
  // refresh

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post) {
    // this.post = post;
    if (this.formGroup.dirty) {
      this.dialog.open(DialogExampleComponent);
      return false;
    } else {
      this.post = post;
    }
  }

  // dialog
  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }

  // candeactivate
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    // console.log('canDeactivate has fired in the component!');
    // return true;
    // return confirm("Are you sure you want to Quit?");
    if (this.formGroup.dirty) {
      // return confirm("Are you sure you want to Quit?");
       this.dialogService.openInfoModal();
       return this.dialogService.navigateAwaySelection$;
    } else{
      return true;
    }
  }

}
