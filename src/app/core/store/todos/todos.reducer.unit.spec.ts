import * as fromTodos from './todos.reducer';
import { GetTodosListSuccess } from './todos.actions';
import { TodoModel } from '../../../models/todo.model';

describe('DocumentsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const {initialTodosState} = fromTodos;
      const action = {type: undefined};

      const state = fromTodos.todoReducer(initialTodosState, action);

      expect(state).toEqual(initialTodosState);
    });
  });

  describe('GetTodosList action', () => {
    it('should return the state with a new list', () => {
      const {initialTodosState} = fromTodos;
      const todos = [new TodoModel()];
      const action = new GetTodosListSuccess(todos);

      const state = fromTodos.todoReducer(initialTodosState, action);

      expect(state).toEqual({...initialTodosState, list: todos});
    });
  });
});
