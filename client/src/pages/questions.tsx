import React from 'react';
import {Row, CardPanel, Col} from 'react-materialize';
import StepWizard from 'react-step-wizard';
interface IPoliticalQuestions {
    id : string;
    color : string;
    title : string;
    answerD : string;
    answerR : string;
}

interface ComponentState {
    allQuestions : IPoliticalQuestions[];
    activeIndex : number;
    selectedAnswer: PoliticalQuestionItem["_selectedAnswer"][];
}

const allQuestionsFromServer : IPoliticalQuestions[] = [
    {
        id: '1',
        color: 'green darken-1',
        title: 'Click which you agree with most...',
        answerD: `The government should do more to help needy Americans, even if it means going deeper into debt`,
        answerR: `The government today can't afford to do much more to help the needy`
    }, {
        id: '2',
        color: 'green darken-1',
        title: 'Hmmmm...',
        answerD: `Government often does a better job than people give it credit for`,
        answerR: `Government is almost always wasteful and inefficient`
    }, {
        id: '3',
        color: 'green darken-1',
        title: 'Think about it...',
        answerD: `Good diplomacy is the best way to ensure peace`,
        answerR: `The best way to ensure peace is through military strength`
    }, {
        id: '4',
        color: 'green darken-1',
        title: 'Clicking is easy!',
        answerD: `Racial discrimination is the main reason why many racial minorities can't get ahead these days`,
        answerR: `Minorities who can't get ahead in this country are mostly responsible for their own condition`
    }, {
        id: '5',
        color: 'green darken-1',
        title: 'What do you think?',
        answerD: `Government regulation of business is necessary to protect the public interest`,
        answerR: `Government regulation of business usually does more harm than good`
    }, {
        id: '6',
        color: 'green darken-1',
        title: 'One or the other',
        answerD: `Homosexuality should be accepted by society`,
        answerR: `Homosexuality should be discouraged by society`
    }, {
        id: '7',
        color: 'green darken-1',
        title: 'You know what to do...',
        answerD: `Business corporations make too much profit`,
        answerR: `Most corporations make a fair and reasonable amount of profit`
    }, {
        id: '8',
        color: 'green darken-1',
        title: 'Woohoo, halfway there!',
        answerD: `Stricter environmental laws and regulations are worth the cost`,
        answerR: `Stricter environmental laws and regulations cost too many jobs and hurt the economy`
    }, {
        id: '9',
        color: 'green darken-1',
        title: 'Keep going!',
        answerD: `Immigrants today strengthen our country because of their hard work and talents`,
        answerR: `Immigrants today are a burden on our country because they take our jobs, housing and health care`
    }, {
        id: '10',
        color: 'green darken-1',
        title: 'I like the way you click...',
        answerD: `Poor people have hard lives because government benefits don't go far enough to help them live decently`,
        answerR: `Poor people today have it easy because they can get government benefits without doing anything in return`
    }, {
        id: '11',
        color: 'green darken-1',
        title: 'Just a few more!',
        answerD: `The economic system in this country unfairly favors powerful interests`,
        answerR: `The economic system in this country is generally fair to most Americans`
    }, {
        id: '12',
        color: 'green darken-1',
        title: 'How many have you answered?',
        answerD: `Our country needs to continue making changes to give African-Americans equal rights with white people`,
        answerR: `Our country has made the changes needed to give African-Americans equal rights with white people`
    }, {
        id: '13',
        color: 'green darken-1',
        title: 'West or East?',
        answerD: `It's best for the future of our country to be active in world affairs`,
        answerR: `We should pay less attention to problems overseas and concentrate on problems here at home`
    }, {
        id: '14',
        color: 'green darken-1',
        title: 'Left or Right?',
        answerD: `Hard work and determination are no guarantee of success for most people`,
        answerR: `Most people who want to get ahead can make it if they're willing to work hard`
    }, {
        id: '15',
        color: 'green darken-1',
        title: 'Ohhhh!',
        answerD: `There are still significant obstacles that make it harder for women to get ahead than men`,
        answerR: `The obstacles that once made it harder for women than men to get ahead are now largely gone`
    }, {
        id: '16',
        color: 'green darken-1',
        title: 'You did it all! Now for your spectrum selection....',
        answerD: `In foreign policy, the U.S. should take into account the interests of its allies even if it means making compromises with them`,
        answerR: `In foreign policy, the U.S. should follow its own national interests even when its allies strongly disagree`
    },
    {
        id: '17',
        color: 'green darken-1',
        title: 'Log in to view your results!',
        answerD: `LOG IN`,
        answerR: ``
    }
];

class PoliticalQuestionItem extends React.Component < any > {

    choice = [];
    
    render() : JSX.Element {
        const {quest} = this.props;
        return (
            <div key={quest.id} className={quest.color} id="qBox" >
                <Row></Row>
                <h5 className= "white-text">{quest.title}</h5>
                <Row></Row>
                <Row>
                    <Col m={2}></Col>
                    <Col m={4} s={12}>
                        <CardPanel
                            className='green lighten-1 waves-effect'
                            id='userChoice'
                            onClick={() => this._selectedAnswer(quest.answerD)}>
                            <span className='white-text'>
                                {quest.answerD}
                            </span>
                        </CardPanel>
                    </Col>
                    {/* <Col className="white-text">OR</Col> */}
                    <Col m={4} s={12}>
                        <CardPanel
                            className='green lighten-1 waves-effect'
                            onClick={() => this._selectedAnswer(quest.answerR)}>
                            <span className='white-text'>
                                {quest.answerR}
                            </span>
                        </CardPanel>
                    </Col>
                </Row>
                <Row></Row>
                <Row></Row>

            </div>
        );
    }

    _selectedAnswer = (choice : any) : void => {
        console.log('Clicked ', choice);
        localStorage.setItem('ok', JSON.stringify(choice));
        this
            .props
            .nextStep();
            
        //FIXME:
        // for (const [index, value] of allQuestionsFromServer.entries()) {
        //     choice.push(<li key={index}>{value}</li>)
        //     }
        // console.log('SELECTED CHOICE:', choice)
    }
}

export default class PoliticalQuestions extends React.Component < any,
ComponentState > {
    state : ComponentState = {
        allQuestions: [],
        activeIndex: 0,
        selectedAnswer: [],
    };

    politicalType: string = "";
    politicalScore: number = 0;

    politicalParty = () => {
        const numQuestions = 16;
        let scoreD = 0;
        let scoreParty = 0;
        //let currentUser = {};
        let allUsers : any[] = [];
        let matchingPoliticalUsers = [];

        let scoreDoverQ = (scoreD + scoreParty) / numQuestions;
        // let scoreR = numQuestions - scoreD; let scoreRoverQ = (scoreR +
        // scoreParty)/numQuestions;

        if (scoreDoverQ <= 0.125) {
            this.politicalType = "solid liberal";
            this.politicalScore = -2;
        } else if (0.125 < scoreDoverQ && scoreDoverQ <= 0.375) {
            this.politicalType = "liberal";
            this.politicalScore = -1;
        } else if (0.375 < scoreDoverQ && scoreDoverQ <= 0.5625) {
            this.politicalType = "centrist";
            this.politicalScore = 0;
        } else if (0.5625 < scoreDoverQ && scoreDoverQ <= 0.8126) {
            this.politicalType = "conservative";
            this.politicalScore = 1;
        } else if (scoreDoverQ > 0.8126) {
            this.politicalType = "core conservative";
            this.politicalScore = 2;
        } else {
            const err = new Error("Error with political calculations!");
            console.log(err);
        };

        // finding users with matching inverse political score
        allUsers.forEach(currentValue => {
            if (currentValue.politicalScore === -(this.politicalScore)) {
            // if (currentValue.politicalScore === -(currentUser.politicalScore)) {
                matchingPoliticalUsers.push(currentValue);
            }
        });
    };

    componentDidMount() : void {setTimeout(() => {
            this.setState({
                allQuestions: [...allQuestionsFromServer]
            });
        }, 500);}

    render() : JSX.Element {
        return this.state.allQuestions.length === 0
            ? (
                <div>LOADING......</div>
            )
            : (
                <div className='container'>
                    {/* <button onClick={this._onComplete}>DONE!</button>
                    <button onClick={this._saveStuff}>SAVE!</button>
                    <button onClick={this._loadStuff}>LOAD!</button> */}
                    <StepWizard>
                        {/* //FIXME:
                        if (allQuestions < this.) */}
                            {this
                            .state
                            .allQuestions
                            .map((quest, index) => (<PoliticalQuestionItem key={index} quest={quest}/>))}
                        {/* else {

                        }; */}
                    </StepWizard>
                </div>
            );
    }

    // private _onComplete = () : void => {
    //     this
    //         .props
    //         .completed(true);
    // }

    // private _saveStuff = () : void => {
    //     localStorage.setItem('ok', JSON.stringify(allQuestionsFromServer));
    //     window.localStorage.setItem('choice', this.state.choice); 
    // }

    // private _loadStuff = () : void => {
    //     const storeMe = localStorage.getItem('choice');
    //     if (storeMe == null) {
    //         console.log('Sadness no cookie');
    //     } else {
    //         console.log('Yay we have cookies', JSON.parse(storeMe));
    //     }
    // }
}
