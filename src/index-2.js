import  React from 'react';
import  ReactDOM from 'react-dom';

import HelloMessage from './components/HelloMessage.js';
import About from './components/About.js';
import { Router, Route} from 'react-router-dom';
import { createHashHistory} from 'history';
import App from './components/App.js';

ReactDOM.render(
    <Router history={createHashHistory()}>
        <div>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/hello" component={HelloMessage}/>
        </div>
    </Router>

    , document.getElementById("content"));

