import { useState } from 'react';
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import './App.css';
import Testing from './Components/Testing';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom"
import Protected from './Components/Protected'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log("The user is logged in? ", isLoggedIn);

    const _toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn);
    // islogged in is true
    // !isLoggedIn is false
    // _toggleLoggedIn is used to toggle between true and false.

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> |&nbsp;
                    {isLoggedIn && <Link to="/Blog">Blogs</Link>} |&nbsp;
                    <Link to="/About">About</Link>
                </nav>          
                <br/>
                <button onClick={_toggleLoggedIn}>
                    { isLoggedIn?'logout': 'login'}
                </button>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Blog">
                    <Protected isLoggedIn={isLoggedIn}>
                        <Blog />
                    </Protected>
                </Route>
                <Route exact path="/About">
                    <About />
                </Route>
                <Route path="*">
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
