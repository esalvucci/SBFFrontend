import { Component, OnInit } from '@angular/core';
import {Chart} from "chart.js"
import {DataResultsService} from '../../../../services/data-results.service';
import {CsvManagerService} from '../../../../services/csv-manager.service';

@Component({
  selector: 'app-emersion-chart',
  templateUrl: './emersion-chart.component.html',
  styleUrls: ['./emersion-chart.component.sass']
})
export class EmersionChartComponent implements OnInit {

  chart = [];

  constructor(public data: DataResultsService,  public csvManager: CsvManagerService) { }

  ngOnInit() {
    this.chart = this.getElemPerSetChart('emersion');
  }

  getElemPerSetChart(ctx) {
    const setsLabels = this.data.area;
    const dataset1 = this.data.emersion;
    const dataset2 = this.data.expectedEmersion;

    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: setsLabels,
        datasets: [
          {
            type: 'line',
            label: 'Expected emersion',
            borderColor: 'rgb(255, 0, 0)',
            borderWidth: 1,
            fill: false,
            data: dataset2,
            pointRadius: 0,
            pointStyle: 'line'
          }, {
          label: 'Emersion',
          borderColor: 'rgb(14, 121, 163)',
          borderWidth: 1,
          fill: false,
          data: dataset1,
          pointRadius: 0,
          pointStyle: 'line'
        }]
      },

      // Configuration options go here
      options: {
        responsive: true,
        legend: {
          labels: {
            usePointStyle: true
           // useLineStyle: true
          }
        },
        title: {
          display: true,
          text: 'Emersion'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Set'
            },
            ticks: {
              callback: (value, index, values) => {
                if (value % 50 === 0) {
                  return value;
                }
              },
              autoSkip: false
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Emersion'
            },
            ticks: {
              min : 0.5,
              stepSize: 0.1
            }
          }]
        }
      }
    });
  }
}
