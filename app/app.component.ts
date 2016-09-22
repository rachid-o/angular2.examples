import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { HeroService }     from './hero.service';
import { TodoComponent } from './todo.component';

import { SlowService } from './slow.service';
import { ObservableService } from './observable.service';
import { TodoService } from './todo.service';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Simple Promises</a> 
        <a [routerLink]="['Todo']">TODO's</a>
    <nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService, SlowService, ObservableService, TodoService
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
    path: '/todos',
    name: 'Todo',
    component: TodoComponent
}
])

export class AppComponent {
    title = 'Angular2 Playground';
}
