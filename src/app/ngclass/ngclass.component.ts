import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../deactivate.guard';
import { Observable } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements  OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
}
