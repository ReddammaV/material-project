import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mytab',
  templateUrl: './mytab.component.html',
  styleUrls: ['./mytab.component.css']
})
export class MytabComponent implements OnInit {
  // navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    // this.navLinks = [
    //   {
    //     label: 'buttons',
    //     link: './buttons',
    //     index: 0
    //   }, {
    //     label: 'card',
    //     link: './card',
    //     index: 1
    //   }, {
    //     label: 'layout',
    //     link: './layout',
    //     index: 2
    //   },
    // ];
  }
  ngOnInit(): void {
    // this.router.events.subscribe((res) => {
    //   this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    // });
  }

  navLinks = [
    { path: 'buttons', label: 'buttons' },
    { path: 'card', label: 'card' },
    { path: 'layout', label: 'layout' },
  ];

}
