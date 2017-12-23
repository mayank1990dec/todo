import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  // result: Response;

  //  // private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  private headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(private http: Http) { }

  createOrEditTodo(id, todo, isDone, hasAttachment) {
    return this.http.post('http://localhost:3012/api/todo', { '_id': id, 'todo': todo, 'isDone': isDone, 'hasAttachment': hasAttachment })
      .map((response: Response) => {
        const status = response.text();
        return status;
      }
      )
      .catch(
      (error: Response) => {
        console.log('catch error');
        return Observable.throw('Something went wrong');
      }
      );
  }


  getToDoById(id: any) {
    return this.http.get('http://localhost:3012/api/todos/id/5a13ebb290887b1068df25bd')
      .map((response: Response) => {
        const todo = response.json();
        return todo;
      })
      .catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');

      }
      );

  }

  login(username, password): Observable<any> {
    return this.http.post('http://localhost:3012/login', { 'username': username, 'password': password }, { headers: this.headers })
      .map((response: Response) => {
        const status = response.text();
        return status;
      }
      )
      .catch(
      (error: Response) => {
        console.log('catch error');
        return Observable.throw('Something went wrong');
      }
      );
  }


  getUserTodo(): Observable<any> {

    return this.http.get('http://localhost:3001/api/todos/userId/5a31132d446641324c191234')
      .map((response: Response) => {
        const users = response.json();
        return users;
      })
      .catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');

      }
      );

  }




}
