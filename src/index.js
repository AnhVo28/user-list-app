import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
// add set time func for evoking func every defined time
import throttle from 'lodash/throttle'



const store = createStore(
  reducers,
  JSON.parse(localStorage.getItem('state')) || undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const dataStringify = ()=>{
  localStorage.setItem('state', JSON.stringify({users:store.getState().users}))

}
store.subscribe(
  //update the localStorage every 2s
  throttle(dataStringify, 2000)
)
ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
