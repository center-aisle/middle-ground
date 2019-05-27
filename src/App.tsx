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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import mustLogin from './pages/mustLogin';
import './App.css';
// import { FindOneAndUpdateOption } from 'mongodb';

const App: React.FC = () => {

<<<<<<< Updated upstream
    // const {isLoggedIn} = props;
=======
>>>>>>> Stashed changes
    return (
        <Router>
            <Wrapper>
                <Nav />
                <Header />
                <Body />
                <Switch>
                    {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
                    <Route exact path='/' component={Splash} />

                    <Route path='http://localhost:3001/auth/openidconnect' />

                    <PrivateRoute exact path='/user/account' component={Account} />
                    <Route component={mustLogin} />

                    <Route
                        path='/questions'
                        render={(routeProps) => <Questions completed={lol} {...routeProps} />}
                    />
                    <Route path='/frenemy' component={Frenemy} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
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
