import { Component, OnInit } from '@angular/core';
import { NavigationServiceService } from '../navigation-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  newClassName: boolean;
  constructor(private navigationservice: NavigationServiceService) { }

  ngOnInit(): void {
    this.navigationservice.navbarClass$.subscribe(
      (data) => {this.newClassName = data;console.log(this.newClassName) }
    )
  }

}
