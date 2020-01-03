import { Component, OnInit } from '@angular/core';
import {CsvManagerService} from "../../../../services/csv-manager.service";
import {Chart} from "chart.js"

@Component({
  selector: 'app-false-pos-prob-chart',
  templateUrl: './false-pos-prob-chart.component.html',
  styleUrls: ['./false-pos-prob-chart.component.sass']
})
export class FalsePosProbChartComponent implements OnInit {

  sets = [];
  a_priori_fpp = [];
  fpp = [];
  fpr = [];

  header_length = 13;
  chart = [];

  constructor(public csvManager: CsvManagerService) { }

  ngOnInit() {
    this.csvManager.getStats().subscribe(
      data => {
        this.getData(this.sets, 0, data);
        this.getData(this.a_priori_fpp, 7, data);
        this.getData(this.fpp, 8, data);
        this.chart = this.getElemPerSetChart('falsePositiveProb');
      }
    );

    this.csvManager.getFPR().subscribe(
      data => {
        let csvRecordsArray = (<string>data).split(/\r\n|\n/);
        for(let i = 1; i<csvRecordsArray.length; i++) {
          let currentRecord = (<string> csvRecordsArray[i]).split(';');
          if(currentRecord.length == 3) {
            this.fpr.push(currentRecord[2].trim());
          }
        }
      }
    );
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
    const dataset1 = this.a_priori_fpp;
    const dataset2 = this.fpp;
    const dataset3 = this.fpr;

    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: setsLabels,
        datasets: [{
          label: 'A priori FPP',
          borderColor: 'rgb(255, 0, 0)',
          borderWidth: 1,
          fill: false,
          data: dataset1,
          pointRadius: 0,
          pointStyle: 'line'
        },
          {
            type: 'line',
            label: 'FPP',
            borderColor: 'rgb(14, 121, 163)',
            borderWidth: 1,
            fill: false,
            data: dataset2,
            pointRadius: 0,
            pointStyle: 'line'
          },
          {
            type: 'line',
            label: 'FPR',
            borderColor: 'rgb(0, 100, 0)',
            borderWidth: 1,
            fill: false,
            data: dataset3,
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
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'FPP'
            },
            ticks: {
              min : 0.000000,
              stepSize: 0.000002
            }
          }]
        }
      }
    });
  }
}
