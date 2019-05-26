import React, { Component } from 'react';
import { BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import Splash from './pages/splash';
import User from './pages/user';
import Account from './pages/account';
import UserAccount from "./pages/useraccount";
import Questions from './pages/questions';
import Frenemy from './pages/frenemy';
import About from './pages/about';
import Contact from './pages/contact';
import NoMatch from './pages/404';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Body from './components/body/body';
import Wrapper from './components/wrapper/wrapper';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Wrapper>
                <Nav />
                <Header />
                <Body />
                <Switch>
                    {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
                    <Route exact path='/' component={Splash} />
                    {/* <Route exact path='/user' component={User} /> */}
                    {/* <Route path="http://localhost:3001/auth/openidconnect" /> */}

                    <Route path="/user/account" component={Account} />

                    <Route
                        exact path='/questions'
                        render={(routeProps) => <Questions completed={lol} {...routeProps} />}
                    />
                    <Route exact path='/frenemy' component={Frenemy} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            </Wrapper>
        </Router>
    );
};

const Auth = {
    isLoggedIn: false,
    logIn(cb: (...args: any[]) => void) {
        this.isLoggedIn = true;
        setTimeout(cb, 100); // fake async
    },
    logOut(cb: (...args: any[]) => void) {
        this.isLoggedIn = false;
        setTimeout(cb, 100);
    }
};

// function PrivateRoute({ component: Account, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render = {props =>
//                 Auth.isLoggedIn ? (
//                     <Account {...props} />
//                 ) : (
//                     <Redirect
//                         to = {{
//                             pathname: "/"//,
//                             // state: { from: props.location }
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }

class Login extends Component {
    state = { redirectToReferrer: false };
  
    login = () => {
        Auth.logIn(() => {
            this.setState({ redirectToReferrer: true });
        });
    };
  
    render() {
        return (
            <div>
            <p>You must log in to view your results and frenemies</p>
            <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

function lol(what: boolean) {
    console.log('We are done!', what);
}

export default App;
