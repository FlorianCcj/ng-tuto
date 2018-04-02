import {Action} from '@ngrx/store';
import { TodoModel } from '../../../models/todo.model';
import { type } from '../../../shared/utils/action.utils';

export const GET_TODOS_LIST = type('[Todos] Get Todos list');
export const GET_TODOS_LIST_SUCCESS = type('[Todos] Get Todos list Success');
export const GET_TODOS_LIST_ERROR = type('[Todos] Get Todos list Error');

/**
 * Take the list of Todos
 */
export class GetTodosList implements Action {
  readonly type = GET_TODOS_LIST;
}
/**
 * Take the list of Todo and add it in sore
 */
export class GetTodosListSuccess implements Action {
  readonly type = GET_TODOS_LIST_SUCCESS;
  constructor(public payload: TodoModel[]) {}
}

/**
 * Take the list of Todo and add it in sore
 */
export class GetTodosListError implements Action {
  readonly type = GET_TODOS_LIST_ERROR;
  constructor(public error: any) {}
}
