import { combineReducers } from 'redux';
import BooksReducer from './books';
import SelectedBook from './selectedBook'

const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: SelectedBook
});

export default rootReducer;
