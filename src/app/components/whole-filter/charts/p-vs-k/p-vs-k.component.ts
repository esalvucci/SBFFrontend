import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {FilterService} from '../../../../services/filter.service';
import {CsvManagerService} from '../../../../services/csv-manager.service';

@Component({
  selector: 'app-p-vs-k',
  templateUrl: './p-vs-k.component.html',
  styleUrls: ['./p-vs-k.component.sass']
})
export class PVsKComponent implements OnInit {

  chart2: Chart = [];
  p3 = [];
  k3 = [];

  backgroundColor = 'rgb(54, 187, 245, 0.6)';
  borderColor = 'rgb(14, 121, 163)';

  constructor(public filter: FilterService, public csvManager: CsvManagerService) {}

  ngOnInit() {
    this.chart2 = this.getChart('p-vs-k', this.k3, this.p3, 'p vs k', 'k', 'p');
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
    this.calculate3();
  }

  calculate3() {
    this.k3.length = 0;
    this.p3.length = 0;

    let myK = 1;
    const step = Math.round(this.filter.k * (0.20));
    let index = 0;

    while ( index <= 20) {
      this.filter.k = myK ;
      this.k3.push(myK);
      this.p3.push(this.filter.calculateP());
      myK += step;
      index++;
    }

    this.chart2.update();
  }
}
