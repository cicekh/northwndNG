import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiurl:string="https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient:HttpClient) { }

getProducts():Observable<Todo[]>
{
return this.httpClient.get<Todo[]>(this.apiurl);
}
}
