import { Component, OnInit } from '@angular/core';
import { NavigationServiceService } from '../navigation-service.service';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {
  newClassName: boolean;
  constructor(private navigationservice: NavigationServiceService) { }

  ngOnInit(): void {
    this.navigationservice.navbarClass$.subscribe(
      (data) => {this.newClassName = data;console.log(this.newClassName) }
    )
  }

}
