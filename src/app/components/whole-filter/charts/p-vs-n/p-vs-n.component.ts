import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {CsvManagerService} from '../../../../services/csv-manager.service';
import {WholeFilterService} from '../../../../services/whole-filter.service';
import {ChartsService} from '../../../../services/charts.service';

@Component({
  selector: 'app-p-vs-n',
  templateUrl: './p-vs-n.component.html',
  styleUrls: ['./p-vs-n.component.sass']
})
export class PVsNComponent implements OnInit {

  backgroundColor = 'rgb(54, 187, 245, 0.6)';
  borderColor = 'rgb(14, 121, 163)';

  constructor(public wholeFilter: WholeFilterService,  public csvManager: CsvManagerService, public chart: ChartsService) {}

  ngOnInit() {
    this.chart.pVSn = this.getChart('p-vs-n', this.wholeFilter.n1, this.wholeFilter.p1, 'p vs n', 'n', 'p');
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
            },
            ticks: {
              callback: (value, index, values) => {
                if (index % 2 === 0) {
                  return value + ' K';
                }
              },
              autoSkip: false
            }
          }]
        }
      }
    });
  }
}
