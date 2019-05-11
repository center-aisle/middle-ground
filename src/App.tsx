import React from 'react';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import Body from './components/body/body';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="">
      <Nav/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
