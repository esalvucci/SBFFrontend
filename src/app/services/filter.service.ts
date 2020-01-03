import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  s = 0;
  n = 4000;
  p = 1e-7;
  m = 0;
  k = 0;
  hash = '4';
  salt;
  dataSet;
  nonElemDataSet;
  // ordering = 'unif';

  constructor() { }

  setDataSet(file: File) {
    this.dataSet = file;
    console.log(file);
    console.log('DataSet: ' + file.name);
  }

  setNonElemDataSet(file: File) {
    this.nonElemDataSet = file;
    console.log(file);
    console.log('NonElement dataset: ' + file.name);
  }

  setHashSalt(file: File) {
    this.salt = file;
    console.log(file);
    console.log('Salt: ' + file.name);
  }

  setHashFunc(hash: string) {
    this.hash = hash;
    console.log(hash);
    console.log('Has function: ' + this.hash);
  }

  resetFields() {
    this.s = 0;
    this.n = 0;
    this.p = 0;
    this.m = 0;
    this.k = 0;
  }

  calculateFilter() {
    // if (this.s <= 0) { ... }
    if (this.n <= 0) { this.n = this.calculateN(); }
    if (this.p <= 0) { this.p = this.calculateP(); }
    if (this.m <= 0) { this.m = this.calculateM(); }
    if (this.k <= 0) { this.k = this.calculateK(); }
  }

  calculateN() {
    // ceil(m / (-k / log(1 - exp(log(p) / k))))
    const logP = Math.log(this.p);
    const exp =  Math.exp(logP / this.k);
    const log2 = Math.log(1 - exp);
    const deno = -this.k / log2;

    return Math.ceil( this.m / deno );
  }

  calculateP() {
    // pow(1 - exp(-k / (m / n)), k)
    const exp = Math.exp( (- this.k) / ( this.m / this.n));
    const base = 1 - exp;
    return Math.pow( base, this.k);
  }

  calculateM() {
    // ceil((n * log(p)) / log(1 / pow(2, log(2))));
    const num = this.n * Math.log(this.p);
    const pow =  Math.pow(2, Math.log(2));
    const deno = Math.log( 1 / pow);
    return Math.ceil( num / deno);
  }

  calculateK() {
    // round((m / n) * log(2));
    return Math.round( ((this.m / this.n) * Math.log(2)));
  }
}


