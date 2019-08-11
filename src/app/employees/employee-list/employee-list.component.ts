import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
// import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { Iemployee } from '../Iemployee';
import { Router } from '@angular/router';


import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogemployeeComponent } from '../../employees/dialogemployee/dialogemployee.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:any;
  message:any;


  constructor(private api:ApiService, public dialog: MatDialog, private router:Router) { }
  // data: MatTableDataSource<any>;
  dataSource = new UserDataSource(this.api);
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  } 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //dialog
  openDialog(){
    this.dialog.open(DialogemployeeComponent); //DialogemployeeComponent components are have to implement in entrycomponents in app.module
  }  

  //edit employee
  editEmployee(id:number){
    this.router.navigate(['employee',id]);
  }

  //delete the employee
  deleteEmployee(employees):void{
    if (confirm("Are you sure?")) {
      this.api.deleteUser(employees)
        .subscribe(
          () => {
            this.message= "Deleted!";
          }
        )}
  }

}


export class UserDataSource extends DataSource<any> {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filter: string;
  constructor(private api: ApiService) {
    super();
  }
  connect(): Observable<Iemployee[]> {
    return this.api.getEmployee();
  }
  disconnect() {}
  
}
