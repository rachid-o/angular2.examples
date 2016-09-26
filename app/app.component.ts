import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { TodoComponent } from './todo.component';
import { SlowService } from './slow.service';
import { ObservableService } from './observable.service';
import { TodoService } from './todo.service';
import { JSONComponent } from './json/json.component';
import { SessionService } from './json/session.service';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Simple Promises</a> 
        <a [routerLink]="['Todo']">TODO's</a>
        <a [routerLink]="['Json']">JSON</a>
    <nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        SlowService, ObservableService, TodoService, 
        SessionService
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
},
{
    path: '/json',
    name: 'Json',
    component: JSONComponent
}
])

export class AppComponent {
    title = 'Angular2 Playground';
}
