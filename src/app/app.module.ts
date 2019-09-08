import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//services
import { ApiService } from './api.service';

// guard
import { DeactivateGuard } from './deactivate.guard';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ModalComponent } from './modal/modal.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DialogemployeeComponent } from './employees/dialogemployee/dialogemployee.component';
import { CardComponent } from './card/card.component';
import { LayoutComponent } from './layout/layout.component';
import { NameLayoutComponent } from './name-layout/name-layout.component';
import { NgclassComponent } from './ngclass/ngclass.component';


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
    DialogemployeeComponent,
    CardComponent,
    LayoutComponent,
    NameLayoutComponent,
    NgclassComponent
  ],
  entryComponents:[DialogExampleComponent, DialogemployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    ApiService,
    DeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
