import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h1>
      {{title | uppercase}}
    </h1>

    <p>
    Hvordan du finder Karlebogaard og SuperUsers
    Karlebovej 91, 3400 Hillerød
    </p>

    osv.
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  title = "contact"
  constructor() { }

  ngOnInit(): void {
  }

}
