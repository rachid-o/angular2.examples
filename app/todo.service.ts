import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';

// http://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/

@Injectable()
export class TodoService {


  private _todos$: Subject<string[]>;
  private dataStore: string[]
  private counter: number;

  constructor() {
    this.dataStore = ['item 1', 'single', 'item 3'];
    this.counter = this.dataStore.length;
    this._todos$ = <Subject<string[]>>new Subject();
  }


  get todos$(): Observable<string[]> {
    return this._todos$.asObservable();
  }

  public loadAll(): void {
    this._todos$.next(this.dataStore);
  }

  public addTodo(): void {
    this.counter++;
    // Do some async stuff to add the TODO to backend service. When this is finished update client with its value
    let newItem = 'added item ' + this.counter;
    // this.dataStore.push(newItem);
    this.addTODObackend(newItem).subscribe( resultItem => {
      this.dataStore.push(resultItem);

    });
    // addTODObackend
    // this._todos$.next(this.dataStore);
  }

  private addTODObackend(name: string): Observable<string> {
    return Observable.create((observer:any) => {
      console.debug('simulate adding item to backend');
      setTimeout(() => {
        observer.next(name + ' (saved on server)');
        observer.complete();
      }, 1000);
    });
  }

}
