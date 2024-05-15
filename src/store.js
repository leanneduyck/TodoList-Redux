import { createStore } from 'react-redux';
import reducer from './reducers/index.js';

const store = createStore(reducer);

export default store;
