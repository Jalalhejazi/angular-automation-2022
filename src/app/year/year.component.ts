import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  columnDefs = [
    {headerName: '#',     field: 'kursus_nummer', sortable: true, filter: true, resizable: true },
    {headerName: 'Title', field: 'kursus_titel' , sortable: true, filter: true, resizable: true  },
    {headerName: 'Room',  field: 'kursus_lokale', sortable: true, filter: true , resizable: true},
    {headerName: 'Date',  field: 'kursus_dato', sortable: true, filter: true, resizable: true},
    {headerName: 'Days',  field: 'kursus_dage', sortable: true, filter: true, resizable: true},
  ];
  
  rowData = [];

  data:any 
  constructor(private service: ApiService) { }

  async ngOnInit() {
    let response  = await this.service.getCourses()
    this.data     = response
    this.rowData  = response
  }

}
