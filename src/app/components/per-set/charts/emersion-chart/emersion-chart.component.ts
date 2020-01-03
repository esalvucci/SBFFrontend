import { Component, OnInit } from '@angular/core';
import {CsvManagerService} from "../../../../services/csv-manager.service";
import {Chart} from "chart.js"

@Component({
  selector: 'app-emersion-chart',
  templateUrl: './emersion-chart.component.html',
  styleUrls: ['./emersion-chart.component.sass']
})
export class EmersionChartComponent implements OnInit {

  sets = [];
  emersion = [];
  expected_emersion = [];

  header_length = 13;
  chart = [];

  constructor(public csvManager: CsvManagerService) { }

  ngOnInit() {
    this.csvManager.getStats().subscribe(
      data => {
        this.getData(this.sets, 0, data);
        this.getData(this.emersion, 6, data);
        this.getData(this.expected_emersion, 5, data);

        this.chart = this.getElemPerSetChart('emersion');
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
    const dataset1 = this.emersion;
    const dataset2 = this.expected_emersion;

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
