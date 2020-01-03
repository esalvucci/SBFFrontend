import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as jsPDF from 'jspdf';
import {HttpServiceService} from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CsvManagerService {

  private stats;
  private fpr;
  private isepr;

  constructor(private http: HttpClient, private myHttp: HttpServiceService) {
    this.stats = this.myHttp.base + '/stats';
    this.fpr = this.myHttp.base + '/fpr';
    this.isepr = this.myHttp.base + '/isepr';
  }

  getStats() {
    return this.http.get(this.stats, {responseType: 'text'});
  }

  getFPR() {
    return this.http.get(this.fpr, {responseType: 'text'});
  }

  getISEPR() {
    return this.http.get(this.isepr, {responseType: 'text'});
  }

  downloadPDF(chartId) {
    const newCanvas = document.querySelector('#' + chartId) as HTMLCanvasElement;

    // create image from dummy canvas
    const newCanvasImg = newCanvas.toDataURL('image/png', 1.0);

    // creates PDF from img
    const doc = new jsPDF('landscape');
    doc.addImage(newCanvasImg, 'PNG', 10, 10, 280, 150 );
    doc.save('chart.pdf');
  }

}
