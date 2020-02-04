import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {DataResultsService} from '../../../../services/data-results.service';
import {CsvManagerService} from '../../../../services/csv-manager.service';

@Component({
  selector: 'app-cells-chart',
  templateUrl: './cells-chart.component.html',
  styleUrls: ['./cells-chart.component.sass']
})
export class CellsChartComponent implements OnInit {

  chart = [];

  constructor(public data: DataResultsService,  public csvManager: CsvManagerService) { }

  ngOnInit() {
    this.chart = this.getElemPerSetChart('cells');
  }

  getElemPerSetChart(ctx) {
    const setsLabels = this.data.area;
    const dataset_cells = this.data.cells;
    const dataset_exp_cells = this.data.expectedCells;

    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: setsLabels,
        datasets: [{
          label: 'Cells',
          backgroundColor: 'rgb(54, 187, 245, 0.6)',
          borderColor: 'rgb(14, 121, 163)',
          data: dataset_cells,
          pointStyle: 'rect'
        },
          {
            type: 'line',
            label: 'Expected Cells',
            borderColor: 'rgb(255, 0, 0)',
            borderWidth: 1,
            fill: false,
            data: dataset_exp_cells,
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
          text: 'Cells'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Set'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Cells'
            },
            ticks: {
              min : 0,
              stepSize: 500
            }
          }]
        }
      }
    });
  }
}
