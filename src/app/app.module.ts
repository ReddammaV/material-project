import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//services
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ModalComponent } from './modal/modal.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DialogemployeeComponent } from './employees/dialogemployee/dialogemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    SpinnerComponent,
    SidenavComponent,
    ModalComponent,
    DialogExampleComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DialogemployeeComponent
  ],
  entryComponents:[DialogExampleComponent, DialogemployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
