import { TodosState, todoReducer } from './todos/todos.reducer';
import { TodosEffects } from './todos/todos.effects';

export interface AppState {
  todo: TodosState;
}

export const REDUCERS = {
  todo: todoReducer,
};

export const EFFECTS = [
  TodosEffects,
];
