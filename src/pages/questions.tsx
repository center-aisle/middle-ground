import React from 'react';
import { Carousel, Row, CardPanel, Col } from 'react-materialize';
//let Carousel = require('react-responsive-carousel').Carousel;

interface IPoliticalQuestions {
  id: string;
  color: string;
  title: string;
  answerD: string;
  answerR: string;
  answerI?: string;
}

interface ComponentState {
  allQuestions: IPoliticalQuestions[];
  activeIndex: number;
}

const allQuestionsFromServer: IPoliticalQuestions[] = [
  {
    id: '1',
    color: 'red',
    title: '1st Question',
    answerD: `The government should do more to help needy Americans, even if it means going deeper into debt`,
    answerR: `The government today can't afford to do much more to help the needy`,
  },
  {
    id: '2',
    color: 'amber',
    title: '2nd Question',
    answerD: `Government often does a better job than people give it credit for`,
    answerR: `Government is almost always wasteful and inefficient`,
  },
  {
    id: '3',
    color: 'green',
    title: '3rd Question',
    answerD: `Good diplomacy is the best way to ensure peace`,
    answerR: `The best way to ensure peace is through military strength`,
  },
  {
    id: '4',
    color: 'blue',
    title: '4th Question',
    answerD: `Racial discrimination is the main reason why many black people can't get ahead these days`,
    answerR: `Blacks who can't get ahead in this country are mostly responsible for their own condition`,
  },
  {
    id: '5',
    color: 'orange',
    title: '5th Question',
    answerD: `Government regulation of business is necessary to protect the public interest`,
    answerR: `Government regulation of business usually does more harm than good`,
  },
];

//     document.addEventListener('DOMContentLoaded', function() {
//     const elems = document.querySelectorAll('.carousel');
//     const instances = M.Carousel.init(elems, options);
//     });

// const instance = M.Carousel.getInstance(elem);
// instance.next();

export default class PoliticalQuestions extends React.Component<any, ComponentState> {
  state: ComponentState = {
    allQuestions: [],
    activeIndex: 0,
  };


  // TODO: Look up using Redux
  clickFunction(choice: string): void {
      console.log('Clicked ', choice);
      console.log("active Index: " + this.state.activeIndex);
      this.setState({activeIndex: this.state.activeIndex+1});
  }

  componentDidMount(): void {
      setTimeout(() => {
          this.setState({
              allQuestions: [...allQuestionsFromServer],
          });
      }, 500);
  }


  
  render(): JSX.Element {
      return (this.state.allQuestions.length === 0)
      ? (
          <div>LOADING......</div>
          )
          : (
              <div className='container'>
        <button onClick={this._onComplete}>DONE!</button>
        <button onClick={this._saveStuff}>SAVE!</button>
        <button onClick={this._loadStuff}>LOAD!</button>

        <Carousel id="carousel"
          options={{ fullWidth: true, indicators: true, shift: this.state.activeIndex}}
          className='white-text center' carouselId={this.state.activeIndex}
        >
          {
              this.state.allQuestions.map((quest, index) => (
            <div key={quest.id} className={quest.color}>
            {/* {(this.state.activeIndex===index)?'active':''} >*/ }
                <h2>{quest.title}</h2>
                <Row>
                    <Col m={6} s={12}>
                        <CardPanel  className='teal waves-effect' onClick={(event: any) => this.clickFunction(quest.answerD)}
                        >
                            <span className='white-text'>
                            {quest.answerD}
                            </span>
                        </CardPanel>
                    </Col>

                    <Col m={6} s={12}>
                        <CardPanel className='teal waves-effect' onClick={(event: any) => this.clickFunction(quest.answerR)}>
                            <span className='white-text'>
                                {quest.answerR}
                            </span>
                        </CardPanel>
                    </Col>
                </Row>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

    private _onComplete = (): void => {
        this.props.completed(false);
    }

    private _saveStuff = (): void => {
        localStorage.setItem('ok', JSON.stringify(allQuestionsFromServer));
    }

    private _loadStuff = (): void => {
        const pika = localStorage.getItem('ok');
        if (pika == null) {
            console.log('Sadness no cookie');
        } else {
            console.log('Yay we have cookies', JSON.parse(pika));
        }
    }
}
