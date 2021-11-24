import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() date: string="";
  
  data:any
  constructor(private service:ApiService,  private router: Router) { }

  async ngOnInit() {
    const response  = await this.service.getCoursesByDate(this.date)
    this.data       = await response
  }

  async moreInfo(selected:any){
    
    //const matrix_URL_notation  = selected  // can pass any object to child router 
    const matrix_URL_notation  = { kursus_dato: selected.kursus_dato, kursus_nummer: selected.kursus_nummer} 
    const config  = { skipLocationChange:false}
    
    this.router.navigate( ['private/members', matrix_URL_notation ], config )

  }
}
