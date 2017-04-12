import  React from 'react';
import  ReactDOM from 'react-dom';

import HelloMessage from './components/HelloMessage.js';
import About from './components/About.js';
import Home from './components/Home.js';
import { BrowserRouter, Route,Link} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <div>
                <ul>
                    <li><Link to={{ pathname: '/about', query: { 'user_name': 'John' } }}>About</Link></li>
                    <li><Link to="/hello">Hello</Link></li>
                    <li><Link to="/hello/John">Hello John</Link></li>
                    <li><Link to="/hello/Jane">Hello Jane</Link></li>
                </ul>
            </div>
            <hr/>
            <div>
                {/*如果没有exact标记,点击其他路径Home不会消失*/}
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/hello" component={HelloMessage}/>
                <Route path="/hello/:user_name" component={HelloMessage}/>
                <Route path="*" />
            </div>
        </div>
    </BrowserRouter>
    , document.getElementById("content"));

