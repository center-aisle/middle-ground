import React from 'react';

function Wrapper() {
  return (
    <div className='main-container'>
      <div className="jumbotron jumbotron-fluid" id="jumbotronIndex">
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
            <a href="mailto:bryanrkelley14@gmail.com"><i className="fas fa-envelope fa-2x" title="Email Bryan Kelley"></i></a>

            <a href="https://github.com/bryanrkelley" target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">Github<i className="material-icons right" title="Bryan's Github">github</i></button></a>

            <a href="https://www.linkedin.com/in/bryanrkelley14/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x" title="Bryan's LinkedIn"></i></a>
          </div>
        </div>

        <div className="col-md-5" id="person">
          <div className="feature">
            <h3>Nicole White</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia at blanditiis quos nisi soluta eaque officiis? Assumenda reiciendis mollitia, quos earum veritatis at quidem. Reiciendis incidunt ipsa minima alias?</p>
            <a href="mailto:gibbons.lacey@gmail.com"><i className="fas fa-envelope fa-2x" title="Email Lacey Gibbons"></i></a>
            <a href="https://github.com/lulu-gibbons" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x" title="Lacey's Github"></i></a>
            <a href="https://www.linkedin.com/in/lacey-gibbons-webdev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x" title="Lacey's LinkedIn"></i></a>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-5" id="person">
          <div className="feature">
            <h3>Naomi Woodruff</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio magni saepe animi rem perspiciatis voluptatem molestias possimus soluta adipisci necessitatibus dolore, nobis doloremque totam quae asperiores nulla nemo officiis aliquid.</p>
            <a href="mailto:tochwat@gmail.com"><i className="fas fa-envelope fa-2x" title="Email Tad Ochwat"></i></a>
            <a href="https://github.com/tochwat" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x" title="Tad's Github"></i></a>
            <a href="https://www.linkedin.com/in/ochwat/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x" title="Tad's LinkedIn"></i></a>
          </div>
        </div>

        <div className="col-md-5" id="person">
          <div className="feature">
            <h3>Catherine Pham</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto harum expedita, necessitatibus ab nostrum aut mollitia fuga dolor quos fugiat! Exercitationem odit provident ipsa obcaecati ea tempore reiciendis error. Laborum!</p>
            <a href="mailto:benvaagen24@gmail.com"><i className="fas fa-envelope fa-2x" title="Email Benjamin Vaagen"></i></a>
            <a href="https://github.com/benvaagen" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x" title="Ben's Github"></i></a>
            <a href="https://www.linkedin.com/in/benjamin-vaagen-7b0178174/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x" title="Ben's LinkedIn"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
