import { Component, OnInit } from '@angular/core';
import {CsvManagerService} from "../../../../services/csv-manager.service";
import {Chart} from 'chart.js';

@Component({
  selector: 'app-cells-chart',
  templateUrl: './cells-chart.component.html',
  styleUrls: ['./cells-chart.component.sass']
})
export class CellsChartComponent implements OnInit {

  sets = [];
  cells = [];
  expected_cells = [];
  header_length = 13;

  chart = [];

  constructor(public csvManager: CsvManagerService) { }

  ngOnInit() {
    this.csvManager.getStats().subscribe(
      data => {
        this.getData(this.sets, 0, data);
        this.getData(this.expected_cells, 2, data);
        this.getData(this.cells, 4, data);

        this.chart = this.getElemPerSetChart('cells');
      }
    )
  }

  getData(list, index, data) {
    let csvRecordsArray = (<string>data).split(/\r\n|\n/);
    // console.log(csvRecordsArray.length);
    for (let i = 14; i < csvRecordsArray.length; i++) {

      //let currentRecord = (<string>csvRecordsArray[i]).split(';');
      let currentRecord = (<string>csvRecordsArray[i]).split(';');
      if (currentRecord.length == this.header_length) {
        list.push(currentRecord[index].trim());
      }
    }
  }

  getElemPerSetChart(ctx) {
    const setsLabels = this.sets;
    const dataset_cells = this.cells;
    const dataset_exp_cells = this.expected_cells;

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
