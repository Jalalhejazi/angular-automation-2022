import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {
  
  
  bookingForm = this.fb.group({
    navn: ['', Validators.required],
    email: ['', Validators.required],
    adresse: ['', Validators.required],
    
  })



  constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.bookingForm.value)
  }

}
