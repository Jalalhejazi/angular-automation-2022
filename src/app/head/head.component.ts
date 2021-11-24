import { Component, OnInit, VERSION } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  title       = ""
  description = ""

  Month = ""
  Month_plus_1 = ""
  CurrentYear = ""
  constructor(private service: ApiService) { }

  ngOnInit() {
    
    this.Month        = this.service.Month
    this.Month_plus_1 = this.service.Month_plus_1
    this.CurrentYear  = this.service.CurrentYear
    this.title        = `Courses about modern Web Technology in ${this.CurrentYear}`
    this.description  = `working with Angular ${VERSION.full} and bootstrap together to build better webapps `
  }

}
