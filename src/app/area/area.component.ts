import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  private svg;
  private margin = {top: 10, right: 30, bottom: 30,left: 50};
  private width = 460 - this.margin.left - this.margin.right;
  private height = 400 - this.margin.top - this.margin.bottom;

  // private data =[
  //   {date: '2013-04-28' , value: '35.98'},
  //   {date: '013-04-29' , value: '147.49'}
  // ];

  private createSvg(): void{
    this.svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width" , this.width + this.margin.left + this.margin.right)
    .attr("height" , this.height + this.margin.top + this.margin.bottom)
    .append("g")
    .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private drawArea(data: any[]): void{
    //x-axis
    const x = d3.scaleTime()
    .domain(d3.extent(data, function(d) { return d.date; }))
    .range([ 0, this.width ]);

    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))

    //y-axis
    const y = d3.scaleLinear()
    .domain([0 , d3.max(data, function(d) { return +d.value})])
    .range([this.height , 0]);

    this.svg.append("g")
    .call(d3.axisLeft(y));

    this.svg.append("path")
    .datum(data)
    .attr("fill", "lightsteelblue")
    .attr("stroke", "lightsteelblue")
    .attr("stroke-width", 1.5)
    .attr("d" , d3.area()
      .x(function(d) { return x(d['date']) })
      .y0(y(0))
      .y1(function(d) { return y(d['value']) })
    );
  }

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    //this.drawArea(this.data);
    d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv", function(d){return {date: d3.timeParse("%Y-%m-%d")(d.date) , value : d.value}}).then(data => this.drawArea(data));
  }

}
