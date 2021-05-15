import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-secondchart',
  templateUrl: './secondchart.component.html',
  styleUrls: ['./secondchart.component.css']
})
export class SecondchartComponent implements OnInit {

  highcharts = Highcharts;

  //data

  data = {
    "actualData":[
      [1609545600, 25147.661971800186],
      [1609632000, 50375.78896291526],
      [1609718400, 76635.3650497256],
      [1609804800, 103403.64073669101],
      [1609891200, 129982.52668957168],
      [1609977600, 156033.29549576997],
      // [1601802600, 181908.03612319578],
      // [1601802900, 207538.3900227178],
      // [1601803200, 232537.93045754876],
      // [1601803500, 259518.28323237147],
      // [1601803800, 287117.94076350937],
      // [1601804100, 315598.0096756201],
      // [1601804400, 344981.4672843964],
      // [1601804700, 374292.2230635927],
      // [1601805000, 400446.2022546162],
      // [1601805300, 426418.2630530269],
      // [1601805600, 453672.35904891463],
      // [1601805900, 481108.08560621465],
    ],
    "forecastedData":[
      [1601800800, 839556.8743005687],
      [1601801100, 866612.1090436996],
      [1601801400, 893667.2928191804],
      [1601801700, 920722.4797950271],
      [1601802000, 947777.6665699161],
      [1601802300, 974832.8533574237],
      [1601802600, 1001888.0401441389],
      [1601802900, 1028943.2269309037],
      [1601803200, 1055998.4137176657],
      [1601803500, 1083053.6005044277]
    ]
  }


  //date ends

  chartOptions = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Sample Data'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      dateTimeLabelFormats: {hour: '%l %p'},
      type: 'datetime',
      title: {
        text: 'Timestamp'
      }
    },
    yAxis: {
      title: {
        text: 'Datapoints'
      }
    },
    series: [
      {
        name: 'Nameof the chart',
        turboThreshold: 9999999999999,
        data: this.data["actualData"].map(([x,y]) => {
          console.log(new Date(x*1000).toLocaleDateString("en-US"));
          return {x,y};
        })
      }
    ],
  };
  constructor() { }

  ngOnInit(): void {
    const unixTime = 1601800800;
    const date = new Date(unixTime*1000);
    console.log(date.toLocaleDateString("en-US"));
  }

}
