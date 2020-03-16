import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {FilterService} from '../../../../services/filter.service';
import {CsvManagerService} from '../../../../services/csv-manager.service';
import {WholeFilterService} from '../../../../services/whole-filter.service';
import {ChartsService} from '../../../../services/charts.service';

@Component({
  selector: 'app-p-vs-m',
  templateUrl: './p-vs-m.component.html',
  styleUrls: ['./p-vs-m.component.sass']
})
export class PVsMComponent implements OnInit {

  backgroundColor = 'rgb(54, 187, 245, 0.6)';
  borderColor = 'rgb(14, 121, 163)';

  constructor(public whileFilter: WholeFilterService,  public csvManager: CsvManagerService, public chart: ChartsService) {}

  ngOnInit() {
   this.chart.pVSm = this.getChart('p-vs-m', this.whileFilter.m2, this.whileFilter.p2, 'p vs m', 'm', 'p');
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
        legend: {
          display: false
        },
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
}
