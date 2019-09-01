import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ModalComponent } from './modal/modal.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { CardComponent } from './card/card.component';
import { LayoutComponent } from './layout/layout.component';
import { NameLayoutComponent } from './name-layout/name-layout.component';
import { NgclassComponent } from './ngclass/ngclass.component';


const routes: Routes = [
  { path: '', component: ButtonsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'employee', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeComponent },
  { path: 'card', component: CardComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'namelayout', component: NameLayoutComponent },
  { path: 'ngclass', component: NgclassComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
