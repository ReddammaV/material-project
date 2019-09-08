import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { DeactivateGuard } from '../deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent,
    canDeactivate: [DeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
