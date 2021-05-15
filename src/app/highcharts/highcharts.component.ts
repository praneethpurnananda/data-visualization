import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css'],
  providers: [DatePipe]
})
export class HighchartsComponent implements OnInit {
  selectedValue;
  myDate:any = new Date();
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  //today = new Date();
  //month = (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
  //monthName = this.months[this.date.getMonth()];
  date = new Date();
  monthName = this.date.toLocaleString('en-us', {month: 'short'});
  year = this.date.getFullYear();
  previousMonth = this.getPreviousMonth();
  getPreviousMonth(){
    var a = this.date.getMonth();
    if(a > 1){
      //not january
      return a-1;
    }
    else{
      return 11;
      //january
    }
  }
  /*
  Today = 2021-03-31
  start = 2021-03-01
  end = 2021-03-30
  end != today -> forcast: false
  end === todays -> forcase : true
  */
  dateFormatter(date){
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if(month.length  < 2){
      month = '0' + month;
    }
    if(day.length < 2){
      day = '0' + day;
    }

    return [year , month , day].join('-');
  }
  getThisMonth(){
    var thisYear = this.date.getFullYear();
    var thisMonth = this.date.getMonth();
    var firstDay = new Date(thisYear , thisMonth , 1);
    var lastDay = new Date(thisYear , thisMonth + 1 , 0);
    // console.log(this.dateFormatter(firstDay));
    // console.log(this.dateFormatter(lastDay));
    var dates = [];
    dates.push(firstDay);
    dates.push(lastDay);
    return dates;
  }
  getThisYear(){
    var thisYear = this.date.getFullYear();
    var firstDay = new Date(thisYear , 0 , 1);
    var lastDay = new Date(thisYear , 12 , 0);
    //console.log(firstDay);
    //console.log(lastDay);
    var dates = [];
    dates.push(firstDay);
    dates.push(lastDay);
    return dates;
  }
  getLastYear(){
    var thisYear = this.date.getFullYear();
    thisYear = thisYear - 1;
    var  firstDay = new Date(thisYear , 0 , 1);
    var lastDay = new Date(thisYear , 12 , 0);
    //console.log(firstDay);
    //console.log(lastDay);
    var dates = [];
    dates.push(firstDay);
    dates.push(lastDay);
    return dates;
  }

  getLastMonth(lastMonth){
    var thisYear = this.date.getFullYear();
    if(lastMonth == 11){
      thisYear = thisYear - 1;
      //lastMonth = 11;
    }
    var firstDay = new Date(thisYear , lastMonth , 1);
    var lastDay = new Date(thisYear , lastMonth + 1 , 0);
    //console.log(firstDay);
    //console.log(lastDay);
    var dates = [];
    dates.push(firstDay);
    dates.push(lastDay);
    return dates;
  }
  called(){
    console.log(this.selectedValue[0]);
    var fromDate = moment(new Date(this.selectedValue[0])).format('yyyy/MM/dd HH:mm:ss UTC');
    var toDate = moment(new Date(this.selectedValue[1])).format('yyyy/MM/dd HH:mm:ss UTC');
    var req = {
      "date_from" : fromDate,
      "date_to" : toDate,
    }
    console.log(JSON.stringify(req));
  }
  rangeFilter(fromDate , toDate){
    this.selectedValue = null;
    //console.log("called");
    //console.log(new Date(fromDate) , new Date(toDate));
    var dates = [];
    dates.push(new Date(fromDate));
    dates.push(new Date(toDate));
    var req = {
      "date_from" : dates[0],
      "date_to" : dates[1]
    }
    console.log(JSON.stringify(req));
    //console.log(dates);
  }

  constructor(private datePipe: DatePipe) {
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      //console.log("previous month" , this.months[this.previousMonth]);
  }

  options = [
    {value: this.getThisMonth(), viewValue: 'This month ', info: this.monthName + ' ' +this.year},
    {value: this.getThisYear(), viewValue: 'This year' , info: this.year},
    {value: this.getLastMonth(this.previousMonth), viewValue: 'Last month' , info: this.months[this.previousMonth]},
    {value: this.getLastYear(), viewValue: 'Last year' , info: this.year - 1}
  ];

  highcharts = Highcharts;
  data =[
    {
      name: 'USA',
      data: [
      6, 11, 32, 110, 235,
      369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
      20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
      26662, 26956, 27912, null, null ,null
      ]
    },
    {
      name: 'USSR/Russia',
      data: [
        6, 11, 32, 110, 235,
        369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
        20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
        26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
        21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
        10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
        5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
      ]
    }
  ];

  chartOptions = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Monthly text visitor'
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function(){
          return this.value  + 3;
        }
      }
    },
    yAxis: {
      title:{
        text: "Visitors"
      },
      labels: {
        formatter: function(){
          //console.log(this.value);
          return this.value / 1000 + 'k';
        }
      }
    },
    plotOptions: {
      area: {
        pointStart: 0,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      },
    },
    credits: {
      enabled: false
    },
    series: this.data
  };



  ngOnInit(): void {
  }

}
