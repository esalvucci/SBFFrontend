import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FilterService} from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  ip = 'https://sbfbackend.herokuapp.com';
  port = '3000';
  base = '';

  constructor(private http: HttpClient, private filter: FilterService) {
    this.base = this.ip; // + ':' + this.port;
  }

  calculateFilter() {
    const url = this.base + '/calculateFilter';

    console.log('calculateFilter requet sent to ' + url);
    this.http.get(url).subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }

  postData() {
    const url = this.base + '/loadDataset';
    this.http.post(url, this.filter.dataSet).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }
}
