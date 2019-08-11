import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../../api.service';
import { Iemployee } from '../Iemployee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
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

  constructor(private router:Router,private api:ApiService, private fb:FormBuilder) { }
  

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
      }
    )
  }


}
