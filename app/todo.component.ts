import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
    template: `
    <h2>TODO List</h2>
    <ul class="todos">
        <li *ngFor="let todo of todos"> 
            <span class="badge">{{todo}}</span> 
        </li>
    </ul>`,
})

export class TodoComponent implements OnInit {

    todos: string[];

    constructor(private todoService: TodoService) { 
    }


    ngOnInit() {
        this.todos = ['item 1', 'item 2'];
    }

}
