
## Please learn TypeScript before learning Angular

- [start with typescript](https://dev.azure.com/superusers-kursus/typescript)

In Angular we use map and reduce to manage data:
- [Map and Reduce](https://dev.azure.com/superusers-kursus/typescript/_git/learning-typescript?path=%2F03-javascript-features%2F15-combining-map-reduce-filter.ts)




## Angular Basics


[![Build Status](https://dev.azure.com/superusers-kursus/Angular-Basics/_apis/build/status/Jalalhejazi.angular-basics?branchName=master)](https://dev.azure.com/superusers-kursus/Angular-Basics/_build/latest?definitionId=142&branchName=master)


## Angular first time

```powershell
# install angular cli package
npm install --global @angular/cli

ng 

ng new --help
ng new demoApp  --defaults --minimal --dry-run 
ng new demoApp  --defaults --minimal

cd demoApp

# edit with vscode
code .

npm install --silent

# discovery command
npm run 

# start up command
npm run start
```
## How to Clone first time

```powershell
git clone https://github.com/Jalalhejazi/angular-basics.git 
cd angular-basics
code .

# Need to install requirements
npm install --silent

# startup and listen on port 1234
npm run start
```


## How to work/edit/run online 

- https://stackblitz.com/edit/angular-qna
- https://stackblitz.com/edit/angular-registration-login-form
- https://stackblitz.com/edit/reactive-programmering?file=index.ts
- https://stackblitz.com/edit/angular-autocomplete-validation-form


## cheatsheet docs

- [cheatsheet](https://angular.io/guide/cheatsheet)

## How to generate Modules

- kursus module
```powershell
ng generate module kursus --module=app.module --route="kursus" --routingScope=Child 
```

## How to generate Component

```powershell
ng generate component --help
ng g c weather -d

# CREATE src/app/weather/weather.component.ts (268 bytes)
# UPDATE src/app/app.module.ts (766 bytes)

```

## How to generate Pipes

```powershell
ng generate pipe --help

```

- https://underscorejs.org/
- https://lodash.com/
- https://date-fns.org/





## How to generate Service

```powershell
ng generate service --help
```


## How to Build and Deploy

Best Practice is to use [Dockerfile](dockerfile)

```powershell
# remove all running docker containers
docker container rm $(docker container ls -aq) -f

# build and run docker container
# http://localhost:1111
npm run docker-run

# How to deploy to dockerHub or any dockerRegistry (on-premise)
npm run deploy
```


## Tester & QA

```powershell
# show your tester how to call PowerShell functions and how to start the app

function container-kill-all {
   docker container rm $(docker container ls -aq) -f
   docker image rm $(docker image ls -aq) -f  
}
function angular-basics-run{
  container-kill-all
  docker container run -d -p 2222:80/tcp jalalhejazi/angular-basics-2020:latest
  chrome http://localhost:2222/
}

angular-basics-run
```


## Deploy using DevOps automation

- When Deployment is automated, then 95% of your time goes to development and research 
- No waste time on conflicts
- No more "It works on my machine"

<br>

![](src/assets/ci-cd-workflow.png)

<br>
