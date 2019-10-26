import { combineReducers } from 'redux';
import {
  ADD_TODO,
} from './actions';

const initialState = {
  todos:[
    {
      todo: 'ir a la escuela',
      date: '26/10/2019'
    },
    {
      todo: 'Almorzar con mi novia',
      date: '26/10/2019'
    }
  ]
}

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.todo, ...state];
    default:
      return state;
  }
};

const nextTodo = combineReducers({
  todos,
});

export default nextTodo;
