import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';

// http://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/

export interface Todo {
  id: number;
  name: string;
  isSync: boolean;
}

@Injectable()
export class TodoService {

  private _todos$: Subject<Todo[]>;
  private dataStore: Todo[] = [];
  private counter: number;

  constructor() {
    this.dataStore = this.generateTodos();
    this.counter = this.dataStore.length;
    this._todos$ = <Subject<Todo[]>>new Subject();
  }

  get todos$(): Observable<Todo[]> {
    return this._todos$.asObservable();
  }

  public loadAll(): void {
    console.debug('loadAll()...');
    this._todos$.next(this.dataStore);
  }

  public addTodo(): void {
    this.counter++;
    // Do some async stuff to add the TODO to backend service. When this is finished update client with its value
    let newItemName = 'added item ' + this.counter;
    let newTodo: Todo = { id: this.counter, name: newItemName, isSync: false };
    // Add it to local cache
    this.dataStore.push(newTodo);

    // Now add it to backend
    this.addTODObackend(newTodo).subscribe((resultItem: Todo) => {
      let updatedTodo = this.findById(resultItem.id);
      if(updatedTodo) {
        updatedTodo.isSync = true;
      }
    });
  }


  /**
   * @returns undefined when not found
   */
  private findById(id: number): Todo {
    let retval: Todo = undefined;
    this.dataStore.forEach((item, index) => {
      if (item.id === id) {
        retval = item;
      }
    });
    return retval;
  }


  private addTODObackend(item: Todo): Observable<Todo> {
    return Observable.create((observer: any) => {
      console.debug('Simulate adding item to backend, will finish after 2 seconds');
      setTimeout(() => {
        // item.isSync = true;
        observer.next(item);
        // observer.next(name + ' (saved on server)');
        observer.complete();
      }, 2000);
    });
  }


  private generateTodos(): Todo[] {
    let todoList: Todo[] = [];
    for (let n of [1, 2, 3]) {
      let t: Todo = { id: n, name: 'item ' + n, isSync: true };
      todoList.push(t);
    }
    return todoList;
  }


}
