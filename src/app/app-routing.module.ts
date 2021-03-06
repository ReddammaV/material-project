import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guard
import { DeactivateGuard } from './deactivate.guard';

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
import { PaginationComponent } from './pagination/pagination.component';
import { PageComponent } from './page/page.component';
import { TabsComponent } from './tabs/tabs.component';
import { MypaginationComponent } from './mypagination/mypagination.component';
import { MytabComponent } from './mytab/mytab.component';

const routes: Routes = [
  { path: '', redirectTo: '/buttons', pathMatch: 'full' },
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
  { path: 'matpagination', component: PaginationComponent },
  { path: 'pagination', component: PageComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'paginationwithparams', component: MypaginationComponent },
  {
    path: 'mytab', component: MytabComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'card', component: CardComponent },
      { path: 'layout', component: LayoutComponent }
    ]
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
