import * as todosActions from './todos.actions';
import { TodoModel } from '../../../models/todo.model';

export interface TodosState {
  list: TodoModel[];
}

export const initialTodosState = {
  list: []
};

export function todoReducer(state: TodosState = initialTodosState, action) {
  switch (action.type) {
    case todosActions.GET_TODOS_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
