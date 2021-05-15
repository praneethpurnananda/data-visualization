import { Component, OnInit } from '@angular/core';

//service
import { NavigationServiceService } from '../navigation-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isNavbarExpanded:boolean = false;
  constructor(private navigationservice: NavigationServiceService) { }

  ngOnInit(): void {
  }

  navFunction(){
    this.isNavbarExpanded = !this.isNavbarExpanded;
    this.navigationservice.pushNewClass(this.isNavbarExpanded);
  }

}
