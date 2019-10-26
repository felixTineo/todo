import { combineReducers } from 'redux';
import myThemes from '../themes';
import {
  ADD_TODO,
  RM_TODO,
  ON_THEMES,
  SET_THEME,
} from './actions';

const initialState = {
  todos:[
    {
      id: '123456-1',
      todo: 'ir a la escuela',
      date: Date.now(),
    },
    {
      id: '123456-2',
      todo: 'Almorzar con mi novia',
      date: Date.now(),
    }
  ],
  themes: {
    visible: false,
    current: myThemes[0],
  }
}

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case RM_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const themes = (state = initialState.themes, action) => {
  switch (action.type) {
    case ON_THEMES:
      return Object.assign({}, state, { visible: !state.visible });
    case SET_THEME:
      return Object.assign({}, state, { current: myThemes.find(theme => theme.name === action.theme) });
    default:
      return state;
  }
}

const nextTodo = combineReducers({
  todos,
  themes,
});

export default nextTodo;
