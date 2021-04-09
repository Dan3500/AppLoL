# AppLoL

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.
A SPA Application about League of Legends. As a player of the game League of Legends, I investigated how could I get public information from riot games, and I realized that riot has a public API where you can find a lot of information about their games, so I decided to build a SPA for practice my knowledge about the frameworks I was studying and how to work with APIS (I'm a junior programmer and I wanna learn and improve in this world). The web application will show a summary of each champion and summoner of EUW (probably I will build it to other regions too) with the API information. Also, you will can register and log in in the app for link your summoner name with your account in the web application. You can see the application launched clicking this link: http://leagueofpros.danielsoltero.com/

# Internal structure

The web application has a Front-end part programmed with Angular11 and a Back-end part programmed with Laravel. This Back-end make calls to the Riot Api, get the information and send it to the Front-end for show it to the user. Also, in the future, Back-end will connect with a data base (MySQL) to get the information of the registered users. Right now, the app only has a simple call for check the connection to the API (you search a summoner name in the text input and, if the name exists in EUW, the app will show you the name of the summoner, his lvl and his profile image in the game League of Legends). You can contribute to the project with some ideas ^.^ 

#ANGULAR DOC
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
