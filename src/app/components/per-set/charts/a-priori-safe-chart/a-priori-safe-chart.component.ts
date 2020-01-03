import { Component, OnInit } from '@angular/core';
import {CsvManagerService} from "../../../../services/csv-manager.service";
import {Chart} from "chart.js";

@Component({
  selector: 'app-a-priori-safe-chart',
  templateUrl: './a-priori-safe-chart.component.html',
  styleUrls: ['./a-priori-safe-chart.component.sass']
})
export class APrioriSafeChartComponent implements OnInit {
  sets = [];
  safep = [];

  headerLength = 13;
  chart: Chart = [];

  constructor(public csvManager: CsvManagerService) { }

  ngOnInit() {
    this.csvManager.getStats().subscribe(
      data => {
        this.getData(this.sets, 0, data);
        this.getData(this.safep, 12, data);
        this.chart = this.getElemPerSetChart('aPrioriSafe');
      }
    );
  }


  getData(list, index, data) {
    const csvRecordsArray = (<string> data).split(/\r\n|\n/);
    // console.log(csvRecordsArray.length);
    for (let i = 14; i < csvRecordsArray.length; i++) {

      // let currentRecord = (<string>csvRecordsArray[i]).split(';');
      const currentRecord = (<string> csvRecordsArray[i]).split(';');
      if (currentRecord.length === this.headerLength) {
        list.push(currentRecord[index].trim());
      }
    }
  }

  getElemPerSetChart(ctx) {
    const setsLabels = this.sets;
    const dataset1 = this.safep;

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
          text: 'Inter-set errors'
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
              labelString: 'ISEP'
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

