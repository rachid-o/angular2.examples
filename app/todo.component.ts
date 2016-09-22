import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TodoService } from './todo.service';

@Component({
    templateUrl: 'app/todo.component.html',
})

export class TodoComponent implements OnInit {

    private todos: string[];
    private todos$: Observable<string[]>;
    // private singleTodo$: Observable<string>;


    constructor(private todoService: TodoService) { 
    }


    ngOnInit() {
        // this.todos = ['item 1', 'item 2', 'item 3'];
        // this.todos = [];
        this.todos$ = this.todoService.todos$; // subscribe to entire collection

        // subscribe to only one single todo
        // this.singleTodo$ = this.todoService.todos$
        //         .map(todos => todos.find(item => item === 'single'));

        // this.todoService.load('1');    // load only todo with id of '1'


    }

    loadTodos() {
        console.log('loadTodos()');
        this.todoService.loadAll();    // load all todos
    }

    addTodo() {
        this.todoService.addTodo();
    }
}
