import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  //ip = 'https://sbfbackend.herokuapp.com';
  ip = 'http://localhost:3000';
  port = '3000';
  base = '';

  constructor(private http: HttpClient) {
    this.base = this.ip; // + ':' + this.port;
  }

  calculateFilter( p, m, k, hash, salt, dataSet, nonElemDataSet) {
    const url = this.base + '/calculateFilter';

    console.log('calculateFilter requet sent to ' + url);
    console.log(p, m, k, hash, salt, dataSet, nonElemDataSet);
    /*this.http.get(url).subscribe(
      res => console.log(res),
      error => console.log(error)
    );*/
  }

 /*
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
 */
}
