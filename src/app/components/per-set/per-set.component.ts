import { Component } from '@angular/core';

@Component({
  selector: 'app-per-set',
  templateUrl: './per-set.component.html',
  styleUrls: ['./per-set.component.sass']
})
export class PerSetComponent {
  isOpen = false;

  constructor() {}

  toggle() {
    this.isOpen = ! this.isOpen;
  }

}
