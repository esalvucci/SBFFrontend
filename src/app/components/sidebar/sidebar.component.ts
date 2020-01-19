import { Component, OnInit } from '@angular/core';
import {FilterService} from '../../services/filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  open = true;

  constructor() { }

  ngOnInit() {
    document.getElementById('main').style.marginLeft = '25%';
  }

  manageNav() {
    if (this.open) {
      this.closeNav();
    } else {
      this.openNav();
    }
    this.open = !this.open;
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '25%';
    document.getElementById('main').style.marginLeft = '25%';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '5%';
    document.getElementById('main').style.marginLeft= '5%';
  }
}
