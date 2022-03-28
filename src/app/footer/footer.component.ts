import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title = "WebApp 2022-03-28"
  constructor() { }

  ngOnInit() {
  }

}
