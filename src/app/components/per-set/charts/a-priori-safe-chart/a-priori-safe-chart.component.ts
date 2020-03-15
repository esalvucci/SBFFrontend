import { Component, OnInit } from '@angular/core';
import {CsvManagerService} from '../../../../services/csv-manager.service';
import {Chart} from 'chart.js';
import {DataResultsService} from '../../../../services/data-results.service';
import {ChartsService} from '../../../../services/charts.service';

@Component({
  selector: 'app-a-priori-safe-chart',
  templateUrl: './a-priori-safe-chart.component.html',
  styleUrls: ['./a-priori-safe-chart.component.sass']
})
export class APrioriSafeChartComponent implements OnInit {

  constructor(public data: DataResultsService, public csvManager: CsvManagerService,  public chart: ChartsService) { }

  ngOnInit() {
    this.chart.chartAPriori = this.getElemPerSetChart('aPrioriSafe');
  }

  getElemPerSetChart(ctx) {
    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: this.data.area,
        datasets: [{
          label: 'A priori SAFEP',
          borderColor: 'rgb(14, 121, 163)',
          borderWidth: 1,
          fill: false,
          data: this.data.aPrioriSafep,
          pointRadius: 0,
          pointStyle: 'line'
        }]
      },

      // Configuration options go here
      options: {
        chartArea: {
          backgroundColor: 'rgba(255, 255, 255)'
        },
        responsive: true,
        legend: {
          labels: {
            usePointStyle: true
          }
        },
        title: {
          display: true,
          text: 'A priori safeness'
        },
        scales: {
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'SAFEP'
            },
            ticks: {
              min : 0.90,
              stepSize: 0.02
            }
          }],
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
          }]
        }
      }
    });
  }

}

