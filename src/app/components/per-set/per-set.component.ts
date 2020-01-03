import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {CsvManagerService} from "../../services/csv-manager.service";

@Component({
  selector: 'app-per-set',
  templateUrl: './per-set.component.html',
  styleUrls: ['./per-set.component.sass']
})
export class PerSetComponent implements OnInit {
  isOpen = false;

  constructor(private csv_manager: CsvManagerService) {}

  ngOnInit() {}

  toggle() {
    this.isOpen = ! this.isOpen;
  }

}
