import {Injectable, OnInit} from '@angular/core';
import {CsvManagerService} from './csv-manager.service';

@Injectable({
  providedIn: 'root'
})
export class DataResultsService {

  area = [];
  members = [];
  expectedCells = [];
  selfCollision = [];
  cells = [];
  expectedEmersion = [];
  emersion = [];
  aPrioriFpp = [];
  fpp = [];
  aPrioriIsep = [];
  expectedIsep = [];
  isep = [];
  aPrioriSafep = [];
  isepr = [];

  constructor(public csvManager: CsvManagerService) {
    // this.loadData();
  }

  cleanData() {
    this.area = [];
    this.members = [];
    this.expectedCells = [];
    this.selfCollision = [];
    this.cells = [];
    this.expectedEmersion = [];
    this.emersion = [];
    this.aPrioriFpp = [];
    this.fpp = [];
    this.aPrioriIsep = [];
    this.expectedIsep = [];
    this.isep = [];
    this.aPrioriSafep = [];
    this.isepr = [];
  }

  loadData() {
   // this.cleanData();
    this.csvManager.getStats().subscribe(
        data => {
          this.getData(data);
        }
    );

    this.csvManager.getISEPR().subscribe(
        data => {
          const csvRecordsArray = (data as string).split(/\r\n|\n/);
          for (let i = 1; i < csvRecordsArray.length; i++) {
            const currentRecord = (csvRecordsArray[i] as string).split(';');
            if( currentRecord.length === 3) {
              this.isepr.push(currentRecord[2].trim());
            }
          }
        }
    );
  }

  getData(data) {
    const csvRecordsArray = (data as string).split(/\r\n|\n/);
    // console.log(csvRecordsArray.length);
    for (let i = 14; i < csvRecordsArray.length; i++) {

      // let currentRecord = (<string>csvRecordsArray[i]).split(';');
      const currentRecord = (csvRecordsArray[i] as string).split(';');
      if (currentRecord.length === 13) {
        this.fillData(currentRecord);
      }
    }
  }

  fillData(currentRecord) {
    this.area.push(currentRecord[0].trim());
    this.members.push(currentRecord[1].trim());
    this.expectedCells.push(currentRecord[2].trim());
    this.selfCollision.push(currentRecord[3].trim());
    this.cells.push(currentRecord[4].trim());
    this.expectedEmersion.push(currentRecord[5].trim());
    this.emersion.push(currentRecord[6].trim());
    this.aPrioriFpp.push(currentRecord[7].trim());
    this.fpp.push(currentRecord[8].trim());
    this.aPrioriIsep.push(currentRecord[9].trim());
    this.expectedIsep.push(currentRecord[10].trim());
    this.isep.push(currentRecord[11].trim());
    this.aPrioriSafep.push(currentRecord[12].trim());
  }

}