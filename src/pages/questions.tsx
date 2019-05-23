import React from "react";
import { Carousel, Row, CardPanel, Col } from "react-materialize";

interface IPoliticalQuestions {
  id: string;
  color: string;
  title: string;
  question: string;
}

interface ComponentState {
  allQuestions: IPoliticalQuestions[];
}

const allQuestionsFromServer: IPoliticalQuestions[] = [
  {
    id: "1",
    color: "red",
    title: "First Panel",
    question: `For a simpler card with less markup
            , try using a card panel
            which just has padding and a shadow effect`
  },
  {
    id: "2",
    color: "amber",
    title: "2nd Panel",
    question: `2 panel`
  },
  {
    id: "3",
    color: "green",
    title: "3rd Panel",
    question: `3 panel`
  },
  {
    id: "4",
    color: "blue",
    title: "4th Panel",
    question: `pikachu`
  },
  {
    id: "5",
    color: "orange",
    title: "5th Panel",
    question: `Dog`
  }
];

export default class PoliticalQuestions extends React.Component<any, ComponentState> {
  state: ComponentState = {
    allQuestions: []
  };

  componentDidMount(): void {
      setTimeout(() => {
          this.setState({
              allQuestions: [...allQuestionsFromServer]
          })
      }, 500);
  }

  render(): JSX.Element {
    return (this.state.allQuestions.length === 0)
    ? (
      <div>LOADING......</div>
    )
    : (
        <div className="container">
        <button onClick={this._onComplete}>DONE!</button>
        <button onClick={this._saveStuff}>SAVE!</button>
        <button onClick={this._loadStuff}>LOAD!</button>
        <Carousel
          options={{ fullWidth: true, indicators: true }}
          className="white-text center"
        >
          {this.state.allQuestions.map(quest => (
            <div key={quest.id} className={quest.color}>
                <h2>{quest.title}</h2>
                <p>
                    <Row>
                        <Col m={6} s={12}>
                            <CardPanel className="teal">
                                <span className="white-text">
                                    {quest.question}
                                </span>
                            </CardPanel>
                        </Col>
                    </Row>
                </p>
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
        localStorage.setItem("ok", JSON.stringify(allQuestionsFromServer));
    }

    private _loadStuff = (): void => {
        const pika = localStorage.getItem("ok");
        if (pika == null) {
            console.log("Sadness no cookie");
        } else {
            console.log("Yay we have cookies", JSON.parse(pika))
        }
    }
}
