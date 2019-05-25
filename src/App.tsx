import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/splash';
import User from './pages/user';
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
import Questions1 from "./pages/questions"
import Wrapper from './components/wrapper/wrapper';
import './App.css';

const App: React.FC = () => {
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
}

export default App;
