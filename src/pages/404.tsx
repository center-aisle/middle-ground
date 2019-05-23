import React from 'react';

function NoMatch(): any {
  return (

    <div className='container'>
      <div className='row'>
        <div className='col s12 m7'>
          <div className='card'>
            {/* <div className="card-image">
              <img src="images/sample-1.jpg"/>
              <span className="card-title">Card Title</span>
            </div> */}
            <div className='card-content center'>
            <h1>404 Page Not Found</h1>
                <h1>
                  <span role='img' aria-label='Face With Rolling Eyes Emoji'>
                    🙄
                  </span>
                </h1>
                <p>The Frenemy you're looking for doesn't exist!</p>
            </div>

            <div className='card-action'>
              <a href='/'>Home</a>
            </div>
          </div>
        </div>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

  </div>
  );
}

export default NoMatch;
