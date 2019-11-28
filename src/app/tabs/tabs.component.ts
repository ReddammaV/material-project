import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tab: number;

  constructor(private router:Router) { 
    this.tab = 1;
    // if (this.router.url === '/card') {
    //   this.tab = 1;
    // } else if (this.router.url === '/pagination') {
    //   this.tab = 2;
    // } 
    // else if (this.router.url === '/buttons') {
    //   this.tab = 3;
    // }
  }

  ngOnInit() {
  }

  tabClick(tab) {
    console.log(tab, 'click')
    if(tab.index==1){
      this.router.navigate(['pagination']);
    }else if(tab.index==2){
      this.router.navigate(['buttons']);
    }else{
      this.router.navigate(['card']);
    }
  }

  // onLinkClick(event: MatTabChangeEvent) {
  //   console.log('event => ', event);
  //   console.log('index => ', event.index);
  //   console.log('tab => ', event.tab);
  
  //   this.router.navigate(['card']); 
  // }

}
