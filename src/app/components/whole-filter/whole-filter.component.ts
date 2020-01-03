import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whole-filter',
  templateUrl: './whole-filter.component.html',
  styleUrls: ['./whole-filter.component.sass']
})
export class WholeFilterComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isOpen = ! this.isOpen;
  }


}
