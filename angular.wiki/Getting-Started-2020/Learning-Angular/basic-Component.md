## MUST BUILD USING NG

```powershell
ng generate component --help
# using true and false
ng generate component navigation --inline-template false -d
ng generate component navigation --inline-template true -d

# mention the parameter --inline-template or NOT 
ng generate component navigation --inline-template -d
ng generate component navigation -d
```


```typescript
import { Component} from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
    <nav> 
        <li *ngFor="let x of data" > {{x}}  </li>
    </nav>
  `
})
export class NavigationComponent {
  data
  constructor() { 
    this.data = new Array<string>()
    this.data.push("home", "service", "about", "products", "contact")
  }
}
```


## Map and Reduce in JavaScript

```typescript
import { Component} from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
    <h1> Map & Reduce Demo </h1>
    <pre>{{data | json}}</pre>
  `
})
export class NavigationComponent {

  
  data

  constructor() { 
  
   
    const personnel = [
      {
        id: 1,
        name: "User 01" ,
        pilotingScore: 10,
        shootingScore: 20,
        isForceUser: true,
      },
      {
        id: 2,
        name: "User 02",
        pilotingScore: 20,
        shootingScore: 30,
        isForceUser: false,
      },
      {
        id: 3,
        name: "User 03",
        pilotingScore: 5,
        shootingScore: 10,
        isForceUser: false,
      },
      {
        id: 4,
        name: "User 04",
        pilotingScore: 5,
        shootingScore: 5,
        isForceUser: true,
      },
      {
        id: 5,
        name: "User 05",
        pilotingScore: 10,
        shootingScore: 10,
        isForceUser: true,
      },
    ]

    this.data = personnel
                  
                  // like SQL Where 
                  // 2 objects
                  //.filter(person => !person.isForceUser)
                  
                  // 3 objects
                  .filter(person => person.isForceUser)

                  // .filter( x => x.name == 'User 01')
                  // .filter( p => p.id > 2)
                  // .filter( x => x.isForceUser )
                  
                  // like foreach, but return new Array
                  // [30,10,20]
                   .map(x => x.pilotingScore + x.shootingScore )
                  
                  // calculations //60
                  .reduce((x, xx) => x + xx,0)
  }
}
```



