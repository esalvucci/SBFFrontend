import { Component, OnInit } from '@angular/core';
import {CsvManagerService} from '../../../../services/csv-manager.service';
import {Chart} from 'chart.js';
import {ChartsService} from '../../../../services/charts.service';
import {DataResultsService} from '../../../../services/data-results.service';

@Component({
  selector: 'app-false-pos-prob-chart',
  templateUrl: './false-pos-prob-chart.component.html',
  styleUrls: ['./false-pos-prob-chart.component.sass']
})
export class FalsePosProbChartComponent implements OnInit {

  constructor(public data: DataResultsService, public csvManager: CsvManagerService, public chart: ChartsService) { }

  ngOnInit() {
    this.chart.chartFPP = this.getElemPerSetChart('falsePositiveProb');
  }

  getElemPerSetChart(ctx) {

    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: this.data.area,
        datasets: [{
          label: 'A priori FPP',
          borderColor: 'rgb(255, 0, 0)',
          borderWidth: 1,
          fill: false,
          data: this.data.aPrioriFpp,
          pointRadius: 0,
          pointStyle: 'line'
        }, {
          type: 'line',
          label: 'FPP',
          borderColor: 'rgb(14, 121, 163)',
          borderWidth: 1,
          fill: false,
          data: this.data.fpp,
          pointRadius: 0,
          pointStyle: 'line'
        }, {
          type: 'line',
          label: 'FPR',
          borderColor: 'rgb(0, 100, 0)',
          borderWidth: 1,
          fill: false,
          data: this.data.fpr,
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
          }
        },
        title: {
          display: true,
          text: 'False positive probability'
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
              labelString: 'FPP'
            },
            ticks: {
              min: 0,
              stepSize: 0.00001
            }
          }]
        }
      }
    });
  }
}
