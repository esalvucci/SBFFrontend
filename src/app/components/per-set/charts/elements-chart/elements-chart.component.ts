import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {CsvManagerService} from "../../../../services/csv-manager.service";

@Component({
  selector: 'app-elements-chart',
  templateUrl: './elements-chart.component.html',
  styleUrls: ['./elements-chart.component.sass']
})
export class ElementsChartComponent implements OnInit {
  sets = [];
  members = [];
  header_length = 13;

  chart = [];

  constructor(public csvManager: CsvManagerService) { }

  ngOnInit() {
    this.csvManager.getStats().subscribe(
      data => {
        this.getData(this.sets, 0, data);
        this.getData(this.members, 1, data);

        this.chart = this.getElemPerSetChart('elemsPerSet');
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
    const mydata = this.members;

    return new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: setsLabels,
        datasets: [{
          //label: 'My First dataset',
          backgroundColor: 'rgb(54, 187, 245, 0.6)',
          borderColor: 'rgb(14, 121, 163)',
          data: mydata
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
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Members'
            },
            ticks: {
              min : 0,
              stepSize: 50
            }
          }]
        }
      }
    });
  }
}
