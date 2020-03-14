import {Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import {CsvManagerService} from '../../../../services/csv-manager.service';
import {WholeFilterService} from '../../../../services/whole-filter.service';

@Component({
  selector: 'app-p-vs-k',
  templateUrl: './p-vs-k.component.html',
  styleUrls: ['./p-vs-k.component.sass']
})
export class PVsKComponent implements OnInit {

  chart2: Chart = [];

  backgroundColor = 'rgb(54, 187, 245, 0.6)';
  borderColor = 'rgb(14, 121, 163)';

  constructor(public wholeFilter: WholeFilterService, public csvManager: CsvManagerService) {}

  ngOnInit() {
    this.chart2 = this.getChart('p-vs-k', this.wholeFilter.k3, this.wholeFilter.p3, 'p vs k', 'k', 'p');
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
              stepSize: 0.05
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
