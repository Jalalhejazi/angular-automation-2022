import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db = "assets/data.json"
  constructor() {}

  async getData(){
     let res  = await fetch(this.db)
     let json = await res.json() 
     // new Set() removes duplicates in array
     // to remove duplicates in array of id, I use map() and find()
     
     const uniqueData = Array.from(new Set(json.map((x:any) => x.id )))
                              .map(id => json.find((a:any) => a.id === id))
     return uniqueData
  }

  async getCalculation_filter(UserName:string) {
    let data = await this.getData()
    return data
            .filter( x => x.name == UserName )
  }


  async getCalculation_filter_by_id(id:number) {
      let data = await this.getData()
      return data
            .filter( p => p.id  == id )
  }

  async getCalculation() {
   /* 
    let res  = await fetch(this.db)
    let json = await res.json() 
    let data:Array<any> = Array.from(json) 
   */

    let data = await this.getData()
    
    return  data
      .filter(person => person.isForceUser)
      .map(x => x.pilotingScore + x.shootingScore )
      .reduce((x, xx) => x + xx,0)
  }


}
