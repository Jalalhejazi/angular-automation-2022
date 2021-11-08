import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component(
  {
   selector: 'about',
   templateUrl: './about.component.html'
  }
)
export class AboutComponent implements OnInit {

  title = "overskrift"
  data: any

  constructor( private service:ProductService) {}

   async ngOnInit() {
    this.data = await this.service.getData()
  }

}
