import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Todo, TodoService } from './todo.service';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeLast';

@Component({
    templateUrl: 'app/todo.component.html',
})

export class TodoComponent implements OnInit {

    private todos$: Observable<Todo[]>;
    private lowerPrioItems$: Observable<Todo[]>;

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        this.todos$ = this.todoService.todos$; // subscribe to entire collection
        // this.todoService.loadAll();

        // subscribe to the last 2 items of the list
        this.lowerPrioItems$ = this.todoService.todos$
            .map( (todos: Todo[]) => {
                return todos.slice(todos.length - 2, todos.length);
            } );
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
