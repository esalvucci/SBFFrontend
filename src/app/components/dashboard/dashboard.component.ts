import { Component, OnInit } from '@angular/core';
import {FilterService} from '../../services/filter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private filter: FilterService) { }

  ngOnInit() {
  }
}
