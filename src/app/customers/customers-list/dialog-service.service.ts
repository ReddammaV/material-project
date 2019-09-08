import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
// modal dialog
import { DialogExampleComponent } from '../../dialog-example/dialog-example.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {
  navigateAwaySelection$: Subject<boolean> = new Subject<boolean>();


  // constructor() { }

  // confirm(message?: string): Observable<boolean> {
  //   const confirmation = window.confirm(message || 'Are you sure?');

  //   return of(confirmation);
  // };
  constructor(
    public dialog: MatDialog
  ) { }
  // openInfoModal() { }
  // openWarningModal() { }
  // openErrorModal() { }
  // openConfirmModal() { }

  openInfoModal() {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '300px',
      data: ''
    });
  }
}
