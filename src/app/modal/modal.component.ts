import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(DialogExampleComponent); //DialogExampleComponent components are have to implement in entrycomponents in app.module
  }  

}
