import { Component, OnInit } from '@angular/core';
import {CsvManagerService} from "../../../../services/csv-manager.service";
import {Chart} from "chart.js";
import {DataResultsService} from '../../../../services/data-results.service';

@Component({
  selector: 'app-a-priori-safe-chart',
  templateUrl: './a-priori-safe-chart.component.html',
  styleUrls: ['./a-priori-safe-chart.component.sass']
})
export class APrioriSafeChartComponent implements OnInit {

  chart: Chart = [];

  constructor(public data: DataResultsService,  public csvManager: CsvManagerService) { }

  ngOnInit() {
    this.chart = this.getElemPerSetChart('aPrioriSafe');
  }

  getElemPerSetChart(ctx) {
    const setsLabels =  this.data.area;
    const dataset1 = this.data.aPrioriSafep;

    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: setsLabels,
        datasets: [{
          label: 'A priori ISEP',
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
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Set'
            },
            /*ticks: {
              callback: function(value, index, values) {
                return parseInt(value);
              },
              autoSkip: false,
              min: 0,
              stepSize: 50
            }*/
          }],
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
          }]
        }
      }
    });
  }

}

