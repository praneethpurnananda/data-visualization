import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  expandNav:boolean = true;
  constructor(
 
  ) { }

  ngOnInit(): void {
    this.expandNav = true;
  }

  navFunction(){
    this.expandNav = !this.expandNav;
  }



}
