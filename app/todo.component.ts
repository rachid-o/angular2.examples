import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Todo, TodoService } from './todo.service';

@Component({
    templateUrl: 'app/todo.component.html',
})

export class TodoComponent implements OnInit {

    private todos$: Observable<Todo[]>;
    // private singleTodo$: Observable<string>;

    constructor(private todoService: TodoService) { 
    }

    ngOnInit() {
        this.todos$ = this.todoService.todos$; // subscribe to entire collection
        this.todoService.loadAll();

        // subscribe to only one single todo
        // this.singleTodo$ = this.todoService.todos$
        //         .map(todos => todos.find(item => item === 'single'));

        // this.todoService.load('1');    // load only todo with id of '1'
    }

    loadTodos() {
        console.log('loadTodos()');
        this.todoService.loadAll();
    }

    addTodo() {
        this.todoService.addTodo();
    }

    getColor(todo: Todo): string {
        return todo.isSync ? 'green' : 'red';
    }
}
