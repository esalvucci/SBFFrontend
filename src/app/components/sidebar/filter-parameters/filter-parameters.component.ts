import { Component, OnInit } from '@angular/core';
import {FilterService} from '../../../services/filter.service';
import {HttpServiceService} from '../../../services/http-service.service';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

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

  constructor(public filter: FilterService, public http: HttpServiceService) {}

  ngOnInit() {}

  canCalculate() {
    // let fieldSet = 0;
    // if (this.filter.s > 0) {fieldSet += 1; }
    // if (this.filter.n > 0) {fieldSet += 1; }
    // if (this.filter.p > 0) {fieldSet += 1; }
    // if (this.filter.m > 0) {fieldSet += 1; }
    // if (this.filter.k > 0) {fieldSet += 1; }
    // return fieldSet > 1 && fieldSet < 4;

    return  true;
  }

  calculate() {
    this.http.calculateFilter();
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
  }

  setElemDataSet(e) {
    const str =  e.target.value;
    this.dataSetName = (str.substring(str.lastIndexOf('\\') + 1));
    this.filter.setDataSet(e.target.files[0]);
  }

  setNonElemDataSet(e) {
    const str =  e.target.value;
    this.nonELemName = (str.substring(str.lastIndexOf('\\') + 1));
    this.filter.setNonElemDataSet(e.target.files[0]);
  }
}

