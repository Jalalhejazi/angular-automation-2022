import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: ApiService
  ) {}

  kursus:any
  
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.kursus = await this.service.getCourseInfo( id )
  }

}
