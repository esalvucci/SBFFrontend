import { Component, OnInit } from '@angular/core';
import {DataResultsService} from '../../services/data-results.service';

@Component({
  selector: 'app-per-set',
  templateUrl: './per-set.component.html',
  styleUrls: ['./per-set.component.sass']
})
export class PerSetComponent {
  isOpen = false;

  constructor(data: DataResultsService) {
    data.loadData();
  }

  toggle() {
    this.isOpen = ! this.isOpen;
  }

}
