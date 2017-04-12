import React from 'react'
import ReactDOM from 'react-dom'
import { Router,Link} from 'react-routify'

const Home = () => <div><h1>home</h1></div>
const About = () => <div><h1>about</h1></div>
const NotFound = () => <div><h1>404</h1></div>
const HelloMessage = () => <div><h1>Hello</h1></div>

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/hello/:user_name', component: HelloMessage },
    { path: '*', component: NotFound }
]

class App extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}

ReactDOM.render(<div>
    <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/hello/John">Hello John</Link></li>
        <li><Link to="/hello/Jane">Hello Jane</Link></li>
    </ul>
    <Router routes={routes} />
</div> ,document.getElementById("content"));