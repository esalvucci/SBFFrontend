import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterSettingsService {
  p = 0;  // false positive probability
  m = 0;  // cells
  k = 0;  // hash number
  hash = '4';
  salt;
  dataSet;
  nonElemDataSet;
  // ordering = 'unif';
  constructor() { }
}
