import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kursister',
  templateUrl: './kursister.component.html',
  styleUrls: ['./kursister.component.css']
})
export class KursisterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  data:any
  ngOnInit() {
    this.route.params.subscribe ( kursus =>  this.data = kursus  )
  }

}
