import React from 'react';

function Wrapper() {
  return (
    <div className='main-container'>
      <div className="jumbotron jumbotron-fluid center" id="jumbotronIndex">
        <div className="container">
          <h1 className="display-4 text-center">ABOUT US</h1>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-5" id="person">
          <div className="feature">
            <h3>Bryan Kelley</h3>
            <p>Hi All! My name is Bryan and I was working on the backend connectivity for the Harvest: Seasonal
              Cookbook web application. The backend for this project utilizes MySQL, Sequelize, Express, Node,
              and Javascript. It’s been a blast working on this project and I’ve been throughly enjoying the
              backend development process. If you are looking for a new backend developer to join your team,
              organization or project feel free to let me know via LinkedIn.</p>
            <a href="mailto:bryanrkelley14@gmail.com" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">E-mail<i className="material-icons left" title="Email Bryan Kelley">mail</i></button></a>

            <a href="https://github.com/bryanrkelley" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light inDuration">Github<i className="material-icons left" title="Bryan's Github">code</i></button></a>

            <a href="https://www.linkedin.com/in/bryanrkelley14/" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">LinkedIn<i className="material-icons left" title="Bryan's LinkedIn">people</i></button></a>
          </div>
        </div>

        <div className="col-md-5" id="person">
          <div className="feature">
            <h3>Nicole White</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia at blanditiis quos nisi soluta eaque officiis? Assumenda reiciendis mollitia, quos earum veritatis at quidem. Reiciendis incidunt ipsa minima alias?</p>
            <a href="mailto:nicoleewhitee@gmail.com" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">E-mail<i className="material-icons left" title="Email Nicole White">mail</i></button></a>

            <a href="https://github.com/NW91" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light inDuration">Github<i className="material-icons left" title="Nicole's Github">code</i></button></a>

            <a href="https://www.linkedin.com/in/nwhite22/" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">LinkedIn<i className="material-icons left" title="Nicole's LinkedIn">people</i></button></a>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-5" id="person">
          <div className="feature">
            <h3>Naomi Woodruff</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio magni saepe animi rem perspiciatis voluptatem molestias possimus soluta adipisci necessitatibus dolore, nobis doloremque totam quae asperiores nulla nemo officiis aliquid.</p>
            <a href="mailto:naomi.woodruff@gmail.com" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">E-mail<i className="material-icons left" title="Email Naomi Woodruff">mail</i></button></a>

            <a href="https://github.com/naywood" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light inDuration">Github<i className="material-icons left" title="Naomi's Github">code</i></button></a>

            <a href="https://www.linkedin.com/in/naomi-woodruff-162450173/" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">LinkedIn<i className="material-icons left" title="Naomi's LinkedIn">people</i></button></a>
          </div>
        </div>

        <div className="col-md-5" id="person">
          <div className="feature">
            <h3>Catherine Pham</h3>
            <p>general blurb about me</p>
            <a href="mailto:cpham.cww@gmail.com" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">E-mail<i className="material-icons left" title="Email Catherine Pham">mail</i></button></a>

            <a href="https://github.com/CrypticWoodWhite" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light inDuration">Github<i className="material-icons left" title="Catherine's Github">code</i></button></a>

            <a href="https://www.linkedin.com/in/catherinephamcww/" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">LinkedIn<i className="material-icons left" title="Catherine's LinkedIn">people</i></button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
