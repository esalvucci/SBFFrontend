import {Injectable} from '@angular/core';
import {CsvManagerService} from './csv-manager.service';
import {WholeFilterService} from './whole-filter.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  s = 0;  //
  n = 0;  // data number
  p = 0;  // false positive probability
  m = 0;  // cells
  k = 0;  // hash number
  hash = '4';
  safeness = 0;
  salt;
  dataSet;
  nonElemDataSet;
  // ordering = 'unif';

  constructor(public csvManager: CsvManagerService, public wholeFilter: WholeFilterService) { this.loadData(); }

  loadData() {
    this.csvManager.getStats().subscribe(
        data => {
          const csvRecordsArray = (data as string).split(/\r\n|\n/);

          this.hash = (csvRecordsArray[0] as string).split(';')[1].trim();
          this.k = (csvRecordsArray[1] as string).split(';')[1].trim() as unknown as number;  // hash number
          this.m = (csvRecordsArray[4] as string).split(';')[1].trim() as unknown as number;  // cells number
          this.n = (csvRecordsArray[7] as string).split(';')[1].trim() as unknown as number;  // data number
          this.p = (csvRecordsArray[11] as string).split(';')[1].trim() as unknown as number;  // false positive probability
          this.safeness = (csvRecordsArray[12] as string).split(';')[1].trim() as unknown as number;  // false positive probability

          this.wholeFilter.setParams(this.k, this.m, this.n, this.p);
        }
    );
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


