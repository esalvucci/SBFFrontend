import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {FilterService} from '../../../../services/filter.service';
import {CsvManagerService} from '../../../../services/csv-manager.service';

@Component({
  selector: 'app-p-vs-m',
  templateUrl: './p-vs-m.component.html',
  styleUrls: ['./p-vs-m.component.sass']
})
export class PVsMComponent implements OnInit {
  chart: Chart = [];
  p2 = [];
  m2 = [];

  backgroundColor = 'rgb(54, 187, 245, 0.6)';
  borderColor = 'rgb(14, 121, 163)';

  constructor(public filter: FilterService, public csvManager: CsvManagerService) {}

  ngOnInit() {
   this.chart = this.getChart('p-vs-m', this.m2, this.p2, 'p vs m', 'm', 'p');
  // this.click();
  }

  getChart(ctx: string, mylabels, mydata, title: string, xlabel: string, ylabel: string): Chart {

    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: mylabels,

        datasets: [{
          backgroundColor: this.backgroundColor,
          borderColor: this.borderColor,
          data: mydata
        }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: title
        },

        scales: {

          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: ylabel
            },
            ticks: {
              min: 0,
              max: 1,
              stepSize: 0.5
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: xlabel
            }
          }]
        }
      }
    });
  }

  click() {
    this.filter.resetFields();
    this.filter.n = 4000;
    this.filter.p = 1e-7;
    this.filter.calculateFilter();
    this.calculate2();
  }

  calculate2() {
    this.p2.length = 0;
    this.m2.length = 0;

    const mkIb = this.filter.m / 8192;
    let myM = mkIb * (0.1123);
    const step = mkIb * (0.0604);
    let index = 0;

    while ( index <= 20) {
      this.filter.m = myM * 8192;
      this.m2.push(this.getStrNum(myM));
      this.p2.push(this.filter.calculateP());
      myM = myM + step;
      index++;
    }

    this.chart.update();
  }

  getStrNum(x: number) {
    const xStr = x.toExponential(2);
    const xArr = xStr.split('e');
    return xArr[0];
  }
}
