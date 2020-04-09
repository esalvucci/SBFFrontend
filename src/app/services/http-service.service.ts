import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

//   base = 'https://sbfbackend01.herokuapp.com';
//  base = 'https://sbfbackend01.herokuapp.com';
  base = 'http://localhost';
  port = '3000';
  ip = this.base + ':' + this.port;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
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
    console.log(m);
    const a = await this.readUploadedFileAsText(dataSet);
    const b = await this.readUploadedFileAsText(nonElemDataSet);

    let c = 0;
    if (hash === 'SHA1') {
      c = 1;
    } else if (hash === 'MD4') {
      c = 4;
    } else if (hash === 'MD5') {
      c = 5;
    }

    let d = '';
    if (salt) {
       d = String(await this.readUploadedFileAsText(salt));
    }
    // console.log( String(a).split('\n').length - 1);
    // console.log( String(b).split('\n').length - 1);

    if (p === 0) { p = ''; }
    if (m === 0) { m = ''; }
    if (k === 0) { k = ''; }
    const body = {
        elem: a,
        non_elem: b,
        hash_: c,
        salt_: d,
        p_: p,
        m_: m,
        k_: k
    };

   // console.log(body);
    const url1 = this.ip + '/save';

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
    const url2 = this.ip + '/calculateFilter';
    // tslint:disable-next-line:no-shadowed-variable
    console.log('3');
    // tslint:disable-next-line:no-shadowed-variable
    await new Promise((res, _) => this.http.get(url2).subscribe(_ => {console.log('done'); res('ok'); }));
    console.log('4');
    return 'ok1';
  }

}
