import {
    GetTodosList, GET_TODOS_LIST,
    GET_TODOS_LIST_SUCCESS, GetTodosListSuccess,
    GetTodosListError, GET_TODOS_LIST_ERROR
} from './todos.actions';

describe('GetTodosList', () => {
    it('should create an action to get list of todo', () => {
      const action = new GetTodosList();

      expect(action.type).toEqual(GET_TODOS_LIST);
    });

    it('should create an action to get back a list of todo in the store', () => {
      const payload = [];
      const action = new GetTodosListSuccess(payload);

      expect({...action}).toEqual({type: GET_TODOS_LIST_SUCCESS, payload});
    });

    it('should create an action to get back an error in the store', () => {
      const error: any = {};
      const action = new GetTodosListError(error);

      expect({...action}).toEqual({type: GET_TODOS_LIST_ERROR, error});
    });
  });
