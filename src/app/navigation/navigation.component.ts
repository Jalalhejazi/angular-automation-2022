import { Component, OnInit } from '@angular/core';
import { format, addMonths } from 'date-fns';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title = "POC "

  Month = ""
  Month_plus_1 = ""
  Month_plus_2 = ""
  CurrentYear = ""
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.Month        = this.service.Month
    this.Month_plus_1 = this.service.Month_plus_1
    this.Month_plus_2 = this.service.Month_plus_2
    this.CurrentYear  = this.service.CurrentYear
  }

}
