import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';


window.onbeforeunload = function(e) {
  return "שים לב! רענון ינתק את המשתמש";
};

ReactDOM.render(

  <BrowserRouter>

    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);