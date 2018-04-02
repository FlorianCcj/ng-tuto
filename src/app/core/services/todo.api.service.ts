import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { TodoModel } from '../../models/todo.model';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodosApiService {
    constructor(private http: HttpClient) {}

    list(): Observable<any> {
        return this.http.get('/api/todos');
    }

    get(id): Observable<any> {
        return this.http.get('/api/todo/' + id);
    }

    post(todo) {
        if (todo.id === 0) {
            return this.http.post('/api/todo', todo);
        } else {
            return this.http.put('/api/todo/' + todo.id, todo);
        }
    }

    delete(todo) {
        return this.http.delete('/api/todo/' + todo.id);
    }
}
