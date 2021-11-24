import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { format, addMonths } from 'date-fns'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private now         
  public NextM
  public NextMM
  public yyyyMM

  public Month
  public Month_plus_1
  public Month_plus_2
  
  public CurrentYear
  
  constructor() { 
    this.now          = new Date()
    this.Month        = format( this.now , 'MMMM' )
    this.Month_plus_1 = format( addMonths(this.now, 1) , 'MMMM' )  
    this.Month_plus_2 = format( addMonths(this.now, 2) , 'MMMM' )  
    
    this.NextM        = format( addMonths(this.now, 1) , 'yyyyMM' )  
    this.NextMM       = format( addMonths(this.now, 2) , 'yyyyMM' )  

    this.CurrentYear  = format( this.now , 'yyyy' )
    this.yyyyMM       = format( this.now , "yyyyMM")
  }

  async getCourses() {
    const url       = environment.api.courses 
    const response  = await fetch(url)
    const body      = await response.json()
    return            body.KalenderList 
  }

  async getCoursesByDate(date:string) {
    const url       = `${environment.api.courses}?dato=${date}` 
    const response  = await fetch(url)
    const body      = await response.json()
    return            body.KalenderList 
  }


  async getCoursesThisMonth() {
    const url       = `${environment.api.courses}?dato=${this.yyyyMM}` 
    const response  = await fetch(url)
    const body      = await response.json()
    return            body.KalenderList 
  }


  async getCoursesNextMonth() {
    const url       = `${environment.api.courses}?dato=${this.NextM}` 
    const response  = await fetch(url)
    const body      = await response.json()
    return            body.KalenderList 
  }

  async getCourseInfo(courseNr:string) {
    const url = `${environment.api.courseInfo}?kursusNummer=${courseNr}&format=json`
    const response  = await fetch(url)
    const body      = await response.json()
    return            body.kursusoversigt[0]
  }

}
