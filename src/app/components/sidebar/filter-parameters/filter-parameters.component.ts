import { Component, OnInit } from '@angular/core';
import {FilterSettingsService} from '../../../services/filter-settings.service';
import {HttpServiceService} from '../../../services/http-service.service';

@Component({
  selector: 'app-filter-parameters',
  templateUrl: './filter-parameters.component.html',
  styleUrls: ['./filter-parameters.component.sass']
})
export class FilterParametersComponent implements OnInit {

  hashFunction = 'MD4';
  saltName = 'Choose file';
  nonELemName = 'Choose file';
  dataSetName = 'Choose file';
  formData: FormData;

  constructor(public filter: FilterSettingsService, private http: HttpServiceService) {}

  ngOnInit() {
    this.formData = new FormData();
  }

  calculate() {

    let selectedHhash: number;
    if (this.filter.hash === 'SHA1') {
      selectedHhash = 1;
    } else if (this.filter.hash === 'MD4') {
      selectedHhash = 4;
    } else if (this.filter.hash === 'MD5') {
      selectedHhash = 5;
    }

    const parameters =  {
      hash: selectedHhash,
      p: this.filter.p,
      m: this.filter.m,
      k: this.filter.k
    };

    this.formData.set('parameters', JSON.stringify(parameters));
    this.filter.calculate(this.formData);
  }

  selectHashFunction(event) {
    const HashFunIndex = event.target.value;
    switch (HashFunIndex) {
      case '1':  this.hashFunction = 'SHA1'; break;
      case '4': this.hashFunction =  'MD4'; break;
      case '5': this.hashFunction = 'MD5'; break;
    }
    this.filter.setHashFunc(this.hashFunction);
  }

  setHashSalt(e) {
    const str =  e.target.value;
    this.saltName = (str.substring(str.lastIndexOf('\\') + 1));
    this.filter.setHashSalt(e.target.files[0]);
    const file = e.target.files[0];
    this.formData.append('uploads[]', file, 'HashSalt.txt');

  }

  setElemDataSet(e) {
    const str =  e.target.value;
    this.dataSetName = (str.substring(str.lastIndexOf('\\') + 1));
    this.filter.setDataSet(e.target.files[0]);
    const file = e.target.files[0];
    this.formData.append('uploads[]', file, 'ElemDataset.csv');
  }

  setNonElemDataSet(e) {
    const str =  e.target.value;
    this.nonELemName = (str.substring(str.lastIndexOf('\\') + 1));
    this.filter.setNonElemDataSet(e.target.files[0]);
    const file = e.target.files[0];
    this.formData.append('uploads[]', file, 'NonElemDataset.csv');
  }

  disableButton() {
    return !this.filter.dataSet ||
        !this.filter.nonElemDataSet ||
        (this.filter.k !== 0 && this.filter.m === 0);
  }
}

