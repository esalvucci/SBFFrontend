import { Component, OnInit } from '@angular/core';
import {FilterService} from '../../services/filter.service';

@Component({
  selector: 'app-final-filter',
  templateUrl: './final-filter.component.html',
  styleUrls: ['./final-filter.component.sass']
})
export class FinalFilterComponent implements OnInit {

  constructor(public filter: FilterService) { }

  ngOnInit() {}
}
