# Pokemon Trainer App 

## Table of contents 
  - [About](#about)
    - [Login page](#login-page) 
    - [Pokemon catalogue](#pokemon-catalogue) 
    - [Pokemon detail page](#pokemon-detail-page) 
    - [Trainer page](#trainer-page) 
  - [How to use](#how-to-use) 
    - [Development server](#development-server) 
    - [Code scaffolding](#code-scaffolding) 
    - [Build](#build) 
    - [Running unit tests](#running-unit-tests) 
    - [Running end-to-end tests](#running-end-to-end-tests) 
    - [Further help](#further-help) 

## About   

Pokemon trainer App is a web app build with Angular Framework. The application uses [Pokemon API](https://pokeapi.co/) to display Pokemons with their avatars. Application includes four different views: Login page, Pokemon catalogue page, Pokemon detail view and Trainer page. Main features of the application are to let user explore different pokemons and to collect them to their Trainer profile. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3. 

### Login page 

Login page is the first thing that the user will see. View includes an input field where users must add their name or some other username. App will store it to the local storage. After the valid username is added and the submit-button clicked, the user will be redirected to the Trainer page.   

![image of the login page](https://github.com/paularintaharri/PokemonTrainer/blob/master/src/assets/readme-images/login_page.png)   

### Pokemon catalogue  

Pokemon catalogue includes name and avatar of all the available pokemons. By clicking the pokemon, the user can open the Pokemon detail page.  

![image of the pokemon catalogue page](https://github.com/paularintaharri/PokemonTrainer/blob/master/src/assets/readme-images/pokemon_catalogue.png)   

### Pokemon detail page   

On the Pokemon detail view, the user can see all different kinds of information of the pokemon. User can also collect the pokemon to their Trainer profile.  

![image of the pokemon detail page](https://github.com/paularintaharri/PokemonTrainer/blob/master/src/assets/readme-images/pokemon_detail.png)   

### Trainer page  

On the Trainer page the user can see all the pokemons collected. By clicking the pokemon, user can open the Pokemon detail page.
  
![image of the trainer page](https://github.com/paularintaharri/PokemonTrainer/blob/master/src/assets/readme-images/trainer_page.png) 
  
## How to use  

### Development server   

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding 

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. 

### Build 


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. 

### Running unit tests 

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). 

### Running end-to-end tests 

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 

### Further help 

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. 
