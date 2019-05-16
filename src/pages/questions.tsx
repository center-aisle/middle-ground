
import LikertScale from 'likert-react';
import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('app');

document.addEventListener('DOMContentLoaded', () => {
  const reviews = [
    { question: 'Code is readable' },
    { question: 'Tests are comprehensive' },
    { question: 'Webpack is configured well' }
  ];
  const onClick = (q, n) => console.info('question: ' + q + ' answer: ' + n);
  render(
    <LikertScale
      reviews={reviews}
      onClick={onClick}
    />, root)
});


function Questions() {
  return (
    
<div className="row">
<div className="col s12 m5">
  <div className="card-panel purple lighten-4">
    <span className="white-text">I am a very simple card. I am good at containing small bits of information.
    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
    </span>
    <form action="#">
    <p className="range-field">
      <input type="range" id="test5" min="0" max="5" />
    </p>
  </form>


  </div>
</div>
</div>
        
  );
}

export default Questions;
