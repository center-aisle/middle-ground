<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> master
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
=======
import React, { Component, ComponentClass } from 'react';
=======
import React from 'react';
>>>>>>> master
import { BrowserRouter as Router,
    Route,
    Switch,
    // Link,
    Redirect,
    // withRouter
} from 'react-router-dom';
>>>>>>> master
import Splash from './pages/splash';
import Account from './pages/account';
import User from './pages/user';
import Questions from './pages/questions';
import Frenemy from './pages/frenemy';
import About from './pages/about';
import Contact from './pages/contact';
import NoMatch from './pages/404';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Body from './components/body/body';
<<<<<<< HEAD
import Questions1 from "./pages/questions"
import Wrapper from './components/wrapper/wrapper';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import mustLogin from './pages/mustLogin';
import './App.css';

const App: React.FC = () => {
<<<<<<< HEAD
  return (
    <Router>
      <div className=''>
        <Wrapper>
          <Nav/> 
          <Header/>
          <Body/>
          <Questions1 completed={lol}/>
          <Switch>
            {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
            <Route exact path='/' component={Splash} />
            <Route exact path='/user' component={User} />
            <Route exact path='/user/account' component={Account} />
            <Route exact path='/questions' component={Questions} />
            <Route exact path='/frenemy' component={Frenemy} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>

        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
};

function lol(what: boolean) {
  console.log("We are done!", what);
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/splash";
import User from "./pages/user";
import Account from "./pages/account";
import Questions from "./pages/questions";
import Frenemy from "./pages/frenemy";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/404";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Body from "./components/body/body";
import Wrapper from "./components/wrapper/wrapper";
import "./App.css";
=======
import Wrapper from './components/wrapper/wrapper';
import './App.css';
>>>>>>> master

const App: React.FC = () => {
=======

<<<<<<< HEAD
    // const {isLoggedIn} = props;
>>>>>>> master
=======
>>>>>>> master
    return (
        <Router>
            <Wrapper>
                <Nav />
                <Header />
                <Body />
                <Switch>
                    {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
                    <Route exact path='/' component={Splash} />
<<<<<<< HEAD

                    {/* <Route path='http://localhost:3001/auth/openidconnect' />
=======
{/* 
                    <Route path='http://localhost:3001/auth/openidconnect' />
>>>>>>> 3e9bcca302831ae933b4c2a154e982cc1a77172d

                    <Route exact path='/user/account' component={Account} />
                    <Route component={User} /> */}

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
<<<<<<< HEAD
    console.log("We are done!", what);
>>>>>>> master
=======
    console.log('We are done!', what);
>>>>>>> master
}

export default App;
