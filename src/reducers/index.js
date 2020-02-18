import { combineReducers } from 'redux';
import booksReducer from './books';
import categoriesReducer from './categories';
import commentsReducer from './comments';

export default combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
    comments: commentsReducer
});