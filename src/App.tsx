import React, { Component, ComponentClass } from 'react';
import { BrowserRouter as Router,
    Route,
    Switch,
    // Link,
    Redirect,
    // withRouter
} from 'react-router-dom';
import Splash from './pages/splash';
import Account from './pages/account';
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
import { FindOneAndUpdateOption } from 'mongodb';

const Auth = {
    isLoggedIn: false,
    logIn() {
        this.isLoggedIn = true;
        window.location.href = "http://localhost:3001/auth/openidconnect";
    },
    logOut() {
        this.isLoggedIn = false;
        window.location.href = "/";
    }
};

interface IRest {
    component: any;
    path: string;
};

function PrivateRoute({ component: Account, ...rest } : IRest) {
    return (
        <Route
            {...rest}
            render = { props =>
                Auth.isLoggedIn ? (
                    <Account {...props} />
                ) : (
                    <Redirect
                        to = {{
                            pathname: "/"
                        }}
                    />
                )
            }
        />
    );
}

class mustLogin extends Component {
    state = { redirectToReferrer: false };
  
    login = () => {
        Auth.logIn();
    };
  
    render() {
        return (
            <div className="container">
                <p>You must log in or create an account to view your results and frenemies</p>
                <button onClick={this.login}>Log in or create account</button>
            </div>
        );
    }
}


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

                    <Route exact path="http://localhost:3001/auth/openidconnect" />

                    <PrivateRoute path="/user/account" component={Account} />
                    <Route path="/" component={mustLogin} />

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

function lol(what: boolean) {
    console.log('We are done!', what);
}

export default App;
