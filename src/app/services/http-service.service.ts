import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

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

  calculateFilter( dataSet, nonElemDataSet, hash, salt, p, m, k) {
    console.log('post Data');
    console.log(dataSet)
    this.postData(dataSet);
    /*const url = this.base + '/calculateFilter';
    console.log('calculateFilter request sent to ' + url);
    //console.log(p, m, k, hash, salt, dataSet, nonElemDataSet);
    this.http.get(url).subscribe(
      res => console.log(res),
      error => console.log(error)
    );*/
  }

  postData1(dataSet) {
    const url = this.base + '/post';
    this.http.post(url, dataSet).subscribe(
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

  postData(dataSet) {
    const url = this.base + '/users';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(url, dataSet, httpOptions).subscribe(res => {
      console.log(res);
    });
  }
}
