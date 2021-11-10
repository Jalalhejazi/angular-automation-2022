import { Component, OnInit } from '@angular/core';
import { environment  } from '../../environments/environment'


@Component({
  selector: 'app-teknologi',
  templateUrl: './teknologi.component.html',
  styleUrls: ['./teknologi.component.css']
})
export class TeknologiComponent implements OnInit {

  teknologier : any

  constructor() { }

  async ngOnInit() {
      let response = await fetch(environment.url.teknologi)
      let tek = await response.json()
      this.teknologier = tek.testEgenskaber[0].teknologier
  }

}
