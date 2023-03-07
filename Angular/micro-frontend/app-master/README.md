# AppMaster

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## [Criar Web Components] - https://www.youtube.com/watch?v=54wcutNmsd0&ab_channel=Zup

# Criando app PAI
1- ng new app [NOME_APP_PAI]

# Criando Web Component dentro da aplicação PAI
2- ng g app [NOME_WEB_COMPONENT]

# Removendo o Bootstrap dos Web Component
3- 
 3.1 - ir no modulo Principal do web component e remover o bootstrap
 3.2 - adicionar ngDoBootstrap e Injector

    export class AppModule {
        constructor(private injector:Injector){}
        ngDoBootstrap(){
            const elem = createCustomElement(AppComponent, {injector: this.injector})
            customElements.define('micro-app-extrato', elem);
        }
    }

# Instalando Angular/elements
4- npm install --save @angular/elements [ou] ng add @angular/elements --project [NOME_PROJETO]

# Adicionando os SCHEMAS no modulo principal da aplicação PAI
5-  
  5.1- No modulo app.modulo

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule
        ],
        providers: [],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [AppComponent]
    })

  5.2- No TS app.component.ts

    export class AppComponent {
        title = 'app-master';
        ngOnInit(){
            const scriptExtrato = document.createElement('script');
            scriptExtrato.src = 'http://localhost:8080/extrato/main.js';
            document.body.appendChild(scriptExtrato);

            const scriptPagamento = document.createElement('script');
            scriptPagamento.src = 'http://localhost:8080/pagamento/main.js';
            document.body.appendChild(scriptPagamento);
        }
    }

# Adicionando Ngx Build 
6- npm install --save ngx-build-plus
 6.1 - ng add ngx-build-plus --project [NOME_PROJETO] (fazer para todos os projetos)

# Criar instancia para os WebComponents
7- 
 7.1 - adicionar nos scripts do package.json principal, para cada projeto
    "build:pagamento": "ng build --configuration production --project pagamento --single-bundle --output-hashing none"
 7.x - npx live-server ./dist


