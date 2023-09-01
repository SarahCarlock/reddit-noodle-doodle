import React, {ReactDOM} from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from '../src/app/store';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
); 

/*const store = createStore()

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
) */