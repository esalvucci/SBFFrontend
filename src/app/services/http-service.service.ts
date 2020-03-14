import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  // ip = 'https://sbfbackend.herokuapp.com';
  ip = 'http://localhost:3000';
  port = '3000';
  base = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.base = this.ip; // + ':' + this.port;
  }

  readUploadedFileAsText = (inputFile) => {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException('Problem parsing input file'));
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsText(inputFile);
    });
  }

  async calculateFilter( dataSet, nonElemDataSet, hash, salt, p, m, k) {
    console.log('calculate filter');
    const a = await this.readUploadedFileAsText(dataSet);
    const b = await this.readUploadedFileAsText(nonElemDataSet);
    let c = '';
    if (salt) {
      const c1 = await this.readUploadedFileAsText(salt);
      c = c1.toString();
    }
    if (p === 0) { p = ''; }
    if (m === 0) { m = ''; }
    if (k === 0) { k = ''; }
    const body = {
        elem: a,
        non_elem: b,
        hash_: hash,
        salt_: c,
        p_: p,
        m_: m,
        k_: k
    };

   // console.log(body);
    const url1 = 'http://localhost:3000/save';

    // tslint:disable-next-line:no-shadowed-variable
    console.log('1');
    await new Promise((res, _) => {
      // tslint:disable-next-line:no-shadowed-variable
      this.http.post(url1, body, this.httpOptions).subscribe( _ => res('ok'));
    });
    console.log('2');

    await this.calc();

    console.log('5');
    return 'ok';
  }

  async calc() {
    const url2 = 'http://localhost:3000/calculateFilter';
    // tslint:disable-next-line:no-shadowed-variable
    console.log('3');
    // tslint:disable-next-line:no-shadowed-variable
    await new Promise((res, _) => this.http.get(url2).subscribe(_ => {console.log('done'); res('ok'); }));
    console.log('4');
    return 'ok1';
  }

}
