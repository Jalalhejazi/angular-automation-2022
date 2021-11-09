import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data:any

  constructor(private service:WeatherService) {}

  async ngOnInit() {
    this.data = await this.service.getData()
  }

}
