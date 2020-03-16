import { Injectable } from '@angular/core';
import {Chart} from 'chart.js';
import {WholeFilterService} from './whole-filter.service';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  chartElements: Chart = [];
  chartCells: Chart = [];
  chartEmersion: Chart = [];
  chartFPP: Chart = [];
  chartInterset: Chart = [];
  chartAPriori: Chart = [];

  pVSk: Chart = [];
  pVSm: Chart = [];
  pVSn: Chart = [];

  constructor(public wholeFilter: WholeFilterService ) {}

  updateCharts(area, cells, expectedCells, members, emersion, expectedEmersion, aPrioriIsep,
               isep, isepr, aPrioriSafep, aPrioriFpp, fpp, fpr) {
    this.updateChartElements(area, members);
    this.updateChartCells(area, cells, expectedCells);
    this.updateChartEmersion(area, emersion, expectedEmersion);
    this.updateChartFPP(area, aPrioriFpp, fpp, fpr);
    this.updateChartInterset(area, aPrioriIsep, isep, isepr);
    this.updateChartAPriori(area, aPrioriSafep);
  }

  updateWholeFilter() {
    console.log('update whole filter charts');
    this.pVSk.data.labels.push(this.wholeFilter.k3);
    this.pVSk.data.datasets[0].data = this.wholeFilter.p3;
    this.pVSk.update();

    this.pVSm.data.labels.push(this.wholeFilter.m2);
    this.pVSm.data.datasets[0].data = this.wholeFilter.p2;
    this.pVSm.update();

    this.pVSn.data.labels.push(this.wholeFilter.n1);
    this.pVSn.data.datasets[0].data = this.wholeFilter.p1;
    this.pVSn.update();
  }

  updateChartCells(area, cells, expectedCells) {
    this.chartCells.data.labels.push( area);
    this.chartCells.data.datasets[0].data = cells;
    this.chartCells.data.datasets [1].data = expectedCells;
    this.chartCells.update();
  }

  updateChartElements(area, members) {
    this.chartElements.data.labels.push(area);
    this.chartElements.data.datasets[0].data = members;
    this.chartElements.update();
  }

  updateChartEmersion(area, emersion, expectedEmersion) {
    this.chartEmersion.data.labels.push(area);
    this.chartEmersion.data.datasets[0].data = expectedEmersion;
    this.chartEmersion.data.datasets[1].data = emersion;
    this.chartEmersion.update();
  }

  updateChartFPP(area, aPrioriFpp, fpp, fpr) {
    this.chartFPP.data.labels.push(area);
    this.chartFPP.data.datasets[0].data = aPrioriFpp;
    this.chartFPP.data.datasets[1].data = fpp;
    this.chartFPP.data.datasets[2].data = fpr;
    this.chartFPP.update();
  }

  updateChartInterset(area, aPrioriIsep, isep, isepr) {
    this.chartInterset.data.labels.push(area);
    this.chartInterset.data.datasets[0].data = aPrioriIsep;
    this.chartInterset.data.datasets[1].data = isep;
    this.chartInterset.data.datasets[2].data = isepr;
    this.chartInterset.update();
  }

  updateChartAPriori(area, aPrioriSafep) {
    this.chartAPriori.data.labels.push(area);
    this.chartAPriori.data.datasets[0].data = aPrioriSafep;
    this.chartAPriori.update();
  }


}
