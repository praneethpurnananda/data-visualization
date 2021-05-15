import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  highcharts = Highcharts;

  data = [
    {
      name: 'Actual Data',
      data: [129982.52668957168, 129982.52668957168, 25147.661971800186, 50375.78896291526, 76635.3650497256, 129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168]
    },
    {
      name: 'Predicted Data',
      data: [129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168, 129982.52668957168]
    }
  ];

  xData = ["Jan" , "feb" , "Mar" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
  chartOptions;
options(){
  this.chartOptions = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Practicing'
    },
    xAxis: {
      categories: this.xData
    },
    yAxis: {
      title: {
        text: 'Visitors'
      }
    },
    series: this.data
  };
}
  constructor() { }

  alter(){
    this.xData = ["Dec"];
    this.data = [
      {
        name: 'Actual Data',
        data: [839556.123, 866612, 893667, 920722, 947777, 974832, 1001888, 1028943, 1055998, 1083053]
      },
      {
        name: 'Predicted Data',

        data: [25147, 375, 76635, 103403, 129982, 156033, 181908, 207538, 232537, 259518, 287117]
      }
    ];
    this.options();
  }

  ngOnInit(): void {
    this.options();

  }

}
