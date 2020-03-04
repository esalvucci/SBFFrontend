import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {DataResultsService} from '../../../../services/data-results.service';
import {ChartsService} from '../../../../services/charts.service';
import {CsvManagerService} from '../../../../services/csv-manager.service';

@Component({
  selector: 'app-elements-chart',
  templateUrl: './elements-chart.component.html',
  styleUrls: ['./elements-chart.component.sass']
})
export class ElementsChartComponent implements OnInit {

  constructor(public data: DataResultsService, public csvManager: CsvManagerService,  public chart: ChartsService) { }

  ngOnInit() {
    this.chart.chartElements = this.getElemPerSetChart('elemsPerSet');
  }

  getElemPerSetChart(ctx) {

    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: this.data.area,
        datasets: [{
          // label: 'My First dataset',
          backgroundColor: 'rgb(54, 187, 245, 0.6)',
          borderColor: 'rgb(14, 121, 163)',
          data: this.data.members
        }]
      },

      // Configuration options go here
      options: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Elements per set'
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
              labelString: 'Members'
            },
            ticks: {
              min: 0,
              stepSize: 50
            }
          }]
        }
      }
    });
  }
}
