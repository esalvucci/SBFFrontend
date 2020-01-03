import { Component, OnInit } from '@angular/core';
import {CsvManagerService} from "../../../../services/csv-manager.service";
import {Chart} from "chart.js"

@Component({
  selector: 'app-interset-err-chart',
  templateUrl: './interset-err-chart.component.html',
  styleUrls: ['./interset-err-chart.component.sass']
})
export class IntersetErrChartComponent implements OnInit {
  sets = [];
  a_priori_isep = [];
  isep = [];
  isepr = [];

  header_length = 13;
  chart = [];

  constructor(public csvManager: CsvManagerService) { }

  ngOnInit() {
    this.csvManager.getStats().subscribe(
      data => {
        this.getData(this.sets, 0, data);
        this.getData(this.a_priori_isep, 9, data);
        this.getData(this.isep, 11, data);
        this.chart = this.getElemPerSetChart('intersetErrors');
      }
    );

    this.csvManager.getISEPR().subscribe(
      data => {
        let csvRecordsArray = (<string>data).split(/\r\n|\n/);
        for (let i = 1; i < csvRecordsArray.length; i++) {
          let currentRecord = (<string>csvRecordsArray[i]).split(';');
          if(currentRecord.length == 3){
            this.isepr.push(currentRecord[2].trim());
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
    const dataset1 = this.a_priori_isep;
    const dataset2 = this.isep;
    const dataset3 = this.isepr;

    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: setsLabels,
        datasets: [{
          label: 'A priori ISEP',
          borderColor: 'rgb(255, 0, 0)',
          borderWidth: 1,
          fill: false,
          data: dataset1,
          pointRadius: 0,
          pointStyle: 'line'
        },
          {
            type: 'line',
            label: 'ISEP',
            borderColor: 'rgb(14, 121, 163)',
            borderWidth: 1,
            fill: false,
            data: dataset2,
            pointRadius: 0,
            pointStyle: 'line'
          },
          {
            type: 'line',
            label: 'ISEPR',
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
          text: 'Inter-set errors'
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
              labelString: 'ISEP'
            },
            ticks: {
              min : 0.0000,
              stepSize: 0.0005
            }
          }]
        }
      }
    });
  }
}
