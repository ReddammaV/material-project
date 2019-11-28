import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTabsModule } from '@angular/material';
const MaterialComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatDialogModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatTabsModule
]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
