import {Actions, Effect} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as TodosActions from './todos.actions';
import { TodosApiService } from '../../services/todo.api.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodosEffects {

  @Effect()
  getTodosList$ = this.actions$
    .ofType(TodosActions.GET_TODOS_LIST)
    .switchMap((action: TodosActions.GetTodosList) =>
      this.todosApiService.list()
        .map((referentials) => (new TodosActions.GetTodosListSuccess(referentials)))
        .catch((err) => Observable.of(new TodosActions.GetTodosListError(err)))
    );

  constructor(
    private actions$: Actions,
    private todosApiService: TodosApiService,
  ) { }
}
