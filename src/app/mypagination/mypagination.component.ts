import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
// import { Iemployee } from 'Iemployee';

@Component({
  selector: 'app-mypagination',
  templateUrl: './mypagination.component.html',
  styleUrls: ['./mypagination.component.css']
})
export class MypaginationComponent implements OnInit {

  agira: any[];
  agiradatas: any[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
    this.getAgira();
  }

  getAgira(){
    this.api.getAgira().subscribe( data => {
      this.agira = data;
      // this.agiradatas = this.agira.companies[];
      console.log(this.agira, 'data');
    });
  }

}
