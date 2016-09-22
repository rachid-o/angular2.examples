import { Component }       from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { HeroService }     from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Simple Promises</a> 
        <a [routerLink]="['Heroes']">Observables 2</a>
    <nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})

@RouteConfig([
{
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
},
{
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
},
{
  path: '/heroes/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
}
])

export class AppComponent {
    title = 'Angular2 Playground';
}
