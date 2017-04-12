
import React from "react";
import {HashRouter,Link,Route} from 'react-router-dom';
import Home from "./Home";
import Works from "./Works";
import UserArch from "./UserArch";
// import NotFound from "./NotFound";

class App extends React.Component {
    render() {
        return <div id="wrapper" className="container full-height">
            <div className="row well">
                <h1>工时管理系统
                    <small>架构组</small>
                </h1>
                <h1></h1>
            </div>
            <hr />
            <HashRouter>
                <div className="row">
                    <div className="col-md-3 well">
                        <ul className="nav in" id="side-menu" >
                            <li><Link to="/userArch">员工管理</Link></li>
                            <li><Link to="/works">任务管理</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-8 well">
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/works" component={Works}></Route>
                        <Route path="/userArch" component={UserArch}></Route>
                        {/*<Route path="*" component={NotFound}></Route>*/}
                    </div>
                </div>
            </HashRouter>
        </div>
    }
}
export default App;