import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '.././material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';

//guard
import { DeactivateGuard } from '../deactivate.guard';

import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [DeactivateGuard]
})
export class CustomersModule { }
