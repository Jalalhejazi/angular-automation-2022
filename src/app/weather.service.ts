import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  url = 'assets/weather.json'
  constructor() { }

  async getData(){
    let res  = await fetch(this.url)
    let json = await res.json() 
    return json
 }
}
