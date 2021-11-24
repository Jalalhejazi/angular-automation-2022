import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  constructor(private activatedroute:ActivatedRoute) { }
  
  yyyyMM:any

  ngOnInit() {
    this.activatedroute.data.subscribe(data => this.yyyyMM = data["dato"] )
  }

}
