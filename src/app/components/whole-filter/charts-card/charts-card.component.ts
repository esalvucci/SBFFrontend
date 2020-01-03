import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-card',
  templateUrl: './charts-card.component.html',
  styleUrls: ['./charts-card.component.sass']
})
export class ChartsCardComponent implements OnInit {
  isOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
