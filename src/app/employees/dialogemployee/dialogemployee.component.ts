import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../../api.service';
import { Iemployee } from '../Iemployee';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialogemployee',
  templateUrl: './dialogemployee.component.html',
  styleUrls: ['./dialogemployee.component.css']
})
export class DialogemployeeComponent implements OnInit {
  dataSaved = false;
  employeeForm: any;
  allEmployees:Observable<Iemployee>;
  employeeIdToUpdate = null;
  message = null;
  
  para:any;
  users:any;

  user = {
    fullName: "",
    email: "",
    mobile: "",
    city: "",    
  }

  constructor(public dialogRef: MatDialogRef<DialogemployeeComponent>, private router:Router,private api:ApiService, private fb:FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      city: ['', Validators.required],      
    });
  }

  onSubmit() {
    let employee = this.employeeForm.value;
    this.addEmployee(employee);
  }

  addEmployee(employee:Iemployee){    
    this.api.addEmployee(employee).subscribe(
      ()=> {     
        this.employeeForm.reset();
        this.dialogRef.close(this.employeeForm.value);
      }
    )
  }

  clear(){
    this.employeeForm.reset();
  }

  //closing dialog
  dialogClose(){
    this.dialogRef.close();
  }

}
