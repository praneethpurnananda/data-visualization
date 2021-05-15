import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  clonedData = [];
  ngOnInit(): void {
      this.clonedData = this.unixEPOCtoJsEPOC(this.data["actualData"], "x-axis");
      console.log(JSON.stringify(this.clonedData));
  }

  unixEPOCtoJsEPOC(data, epocAxis: string) {
    // https://stackoverflow.com/questions/4676195/why-do-i-need-to-multiply-unix-timestamps-by-1000-in-javascript
    // Since JS uses milliseconds internally, while normal UNIX timestamps are usually in seconds, hence multiply unix timestamps by 1000 in JS

    /*
      epoc time got it in seconds instead of milliseconds
      Ex - first value 1601800800
           new Date(1601800800) => Mon Jan 19 1970
           new Date(1601800800 * 1000) => Sun Oct 04 2020
    */


    //let dataPoints_EPOC = [];

    if (data.length > 0) {
      if (epocAxis === "x-axis") {
        return data.map(([x, y]) => [x*1000, y]);
        //data.map(([x, y]) => { dataPoints_EPOC.push([x * 1000, y]); });
        //return dataPoints_EPOC;
      }
      else if (epocAxis === "y-axis") {
        return data.map(([x, y]) => [x, y*1000]);
        //data.map(([x, y]) => { dataPoints_EPOC.push([x, y * 1000]); });
        //return dataPoints_EPOC;
      }
      else {
        console.log( "epocAxis received does not matches x-axis or y-axis = ", epocAxis);
        return [];
      }
    }
    else {
      //console.error("Please check the Data passed = ", data);
      return [];
    }

  }



  highcharts = Highcharts;
  data = {
    actualData: [
   [
      1609545600000,
      16210.003814769634
   ],
   [
      1609632000000,
      34526.84928241244
   ],
   [
      1609718400000,
      50862.857491043105
   ],
   [
      1609804800000,
      68132.85416905611
   ],
   [
      1609891200000,
      85887.92453323679
   ],
   [
      1609977600000,
      105538.26073203122
   ],
   [
      1610064000000,
      123826.06135978425
   ],
   [
      1610150400000,
      142659.84293498762
   ],
   [
      1610236800000,
      159526.10305733167
   ],
   [
      1610582400000,
      161389.36151636436
   ],
   [
      1610668800000,
      181439.3974109884
   ],
   [
      1610755200000,
      197980.53091185432
   ],
   [
      1610841600000,
      214945.00804027217
   ],
   [
      1610928000000,
      232096.69072366253
   ],
   [
      1611014400000,
      249752.42015709484
   ],
   [
      1611100800000,
      269667.6498288079
   ],
   [
      1611187200000,
      288187.8842568586
   ],
   [
      1611273600000,
      308003.5169464744
   ],
   [
      1611360000000,
      326469.41665244964
   ],
   [
      1611446400000,
      346842.09039552853
   ],
   [
      1611532800000,
      364936.88532990153
   ],
   [
      1611619200000,
      381854.3905186266
   ],
   [
      1611705600000,
      400066.50043860334
   ],
   [
      1611792000000,
      419235.111366964
   ],
   [
      1611878400000,
      438049.5257237394
   ],
   [
      1611964800000,
      456163.63069797173
   ],
   [
      1612051200000,
      474825.2952150449
   ]
],

    forecastedData: [
      [1612137600, 493321.765215631],
      [1612224000, 511840.20289091306],
      [1612310400, 530355.7192904663],
      [1612396800, 548871.624163174],
      [1612483200, 567387.4773764678],
      [1612569600, 585903.3374594642],
      [1612656000, 604419.1966289231],
      [1612742400, 622935.0559198647],
      [1612828800, 641450.9151946516],
      [1612915200, 659966.7744715867]
    ]
  };


  myDateFormat = '%e/%m/%y';

  chartOptions = {
    chart: {
      zoomType: "xy"
    },
    mapNavigation: {
      enableMouseWheelZoom: true
    },
    credits: {
      enabled: false
    },

    title: {
      text: 'Azure Cost Tracking',
    },
    legend: {
      enabled: true
    },


    xAxis: {
      // crosshair: {
      //   width: 1,
      //   color: "#3168DA",
      //   dashStyle: "ShortDash"
      // },
      //dateTimeLabelFormats: { hour: "%e %m" },
      type: "datetime",
      dateTimeLabelFormats: {
          millisecond: this.myDateFormat,
          second: this.myDateFormat,
          minute: this.myDateFormat,
          hour: this.myDateFormat,
          day: this.myDateFormat,
          week: this.myDateFormat,
          month: this.myDateFormat,
          year: this.myDateFormat
      },
      title: {
        text: 'Time'
      }
    },

    yAxis: {
      // crosshair: {
      //   width: 1,
      //   color: "#3168DA",
      //   dashStyle: "ShortDash"
      // },
      title: {
        text: 'Cost'
      },
    },

    plotOptions: {
      series: {
        showInLegend: true
      },
      area: {
        marker: {
          enabled: true,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },

    series: [
      {
        type: 'area',
        turboThreshold: 9999999999999,
        name: 'Actual data',
        data: this.data["actualData"].map(([x,y]) => {
        //data: this.clonedData.map(([x,y]) => {
          console.log(x);
          //var a = new Date(x*1000).toLocaleDateString("en-US");
          //console.log("X-AXIS" , a);
          //var a = x * 1000;
          return {x,y}
        })
      },
      // {
      //   type: 'area',
      //   turboThreshold: 9999999999999,
      //   name: 'Forcasted data',
      //   data: this.data["forecastedData"].map(([x,y]) => {
      //     //var z = new Date(x*1000).toLocaleDateString("en-US");
      //     //console.log("Y-AXIS" , z);
      //     var z = x * 1000;
      //     return {x,y}
      //   })
      // }
    ]

  };
  constructor() { }



}
