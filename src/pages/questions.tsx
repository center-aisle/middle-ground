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
        color: 'red',
        title: '1st Question',
        answerD: `The government should do more to help needy Americans, even if it means going deeper into debt`,
        answerR: `The government today can't afford to do much more to help the needy`
    }, {
        id: '2',
        color: 'blue',
        title: '2nd Question',
        answerD: `Government often does a better job than people give it credit for`,
        answerR: `Government is almost always wasteful and inefficient`
    }, {
        id: '3',
        color: 'red',
        title: '3rd Question',
        answerD: `Good diplomacy is the best way to ensure peace`,
        answerR: `The best way to ensure peace is through military strength`
    }, {
        id: '4',
        color: 'blue',
        title: '4th Question',
        answerD: `Racial discrimination is the main reason why many racial minorities can't get ahead these days`,
        answerR: `Minorities who can't get ahead in this country are mostly responsible for their own condition`
    }, {
        id: '5',
        color: 'red',
        title: '5th Question',
        answerD: `Government regulation of business is necessary to protect the public interest`,
        answerR: `Government regulation of business usually does more harm than good`
    }, {
        id: '6',
        color: 'blue',
        title: '6th Question',
        answerD: `Homosexuality should be accepted by society`,
        answerR: `Homosexuality should be discouraged by society`
    }, {
        id: '7',
        color: 'red',
        title: '7th Question',
        answerD: `Business corporations make too much profit`,
        answerR: `Most corporations make a fair and reasonable amount of profit`
    }, {
        id: '8',
        color: 'blue',
        title: '8th Question',
        answerD: `Stricter environmental laws and regulations are worth the cost`,
        answerR: `Stricter environmental laws and regulations cost too many jobs and hurt the economy`
    }, {
        id: '9',
        color: 'red',
        title: '9th Question',
        answerD: `Immigrants today strengthen our country because of their hard work and talents`,
        answerR: `Immigrants today are a burden on our country because they take our jobs, housing and health care`
    }, {
        id: '10',
        color: 'blue',
        title: '10th Question',
        answerD: `Poor people have hard lives because government benefits don't go far enough to help them live decently`,
        answerR: `Poor people today have it easy because they can get government benefits without doing anything in return`
    }, {
        id: '11',
        color: 'red',
        title: '11th Question',
        answerD: `The economic system in this country unfairly favors powerful interests`,
        answerR: `The economic system in this country is generally fair to most Americans`
    }, {
        id: '12',
        color: 'blue',
        title: '12th Question',
        answerD: `Our country needs to continue making changes to give African-Americans equal rights with white people`,
        answerR: `Our country has made the changes needed to give African-Americans equal rights with white people`
    }, {
        id: '13',
        color: 'red',
        title: '13th Question',
        answerD: `It's best for the future of our country to be active in world affairs`,
        answerR: `We should pay less attention to problems overseas and concentrate on problems here at home`
    }, {
        id: '14',
        color: 'blue',
        title: '14th Question',
        answerD: `Hard work and determination are no guarantee of success for most people`,
        answerR: `Most people who want to get ahead can make it if they're willing to work hard`
    }, {
        id: '15',
        color: 'red',
        title: '15th Question',
        answerD: `There are still significant obstacles that make it harder for women to get ahead than men`,
        answerR: `The obstacles that once made it harder for women than men to get ahead are now largely gone`
    }, {
        id: '16',
        color: 'blue',
        title: '16th Question',
        answerD: `In foreign policy, the U.S. should take into account the interests of its allies even if it means making compromises with them`,
        answerR: `In foreign policy, the U.S. should follow its own national interests even when its allies strongly disagree`
    }
];

class PoliticalQuestionItem extends React.Component < any > {

    choice = [];
    
    render() : JSX.Element {
        const {quest} = this.props;
        return (
            <div key={quest.id} className={quest.color}>
                <h2>{quest.title}</h2>
                <Row>
                    <Col m={6} s={12}>
                        <CardPanel
                            className='teal waves-effect'
                            id='userChoice'
                            onClick={() => this._selectedAnswer(quest.answerD)}>
                            <span className='white-text'>
                                {quest.answerD}
                            </span>
                        </CardPanel>
                    </Col>

                    <Col m={6} s={12}>
                        <CardPanel
                            className='teal waves-effect'
                            onClick={() => this._selectedAnswer(quest.answerR)}>
                            <span className='white-text'>
                                {quest.answerR}
                            </span>
                        </CardPanel>
                    </Col>
                </Row>
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
        for (const [index, value] of allQuestionsFromServer.entries()) {
            choice.push(<li key={index}>{value}</li>)
            }
        console.log('SELECTED CHOICE:', choice)
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
                    <button onClick={this._onComplete}>DONE!</button>
                    <button onClick={this._saveStuff}>SAVE!</button>
                    <button onClick={this._loadStuff}>LOAD!</button>
                    <StepWizard>
                        {this
                            .state
                            .allQuestions
                            .map((quest, index) => (<PoliticalQuestionItem key={index} quest={quest}/>))}
                    </StepWizard>
                </div>
            );
    }

    private _onComplete = () : void => {
        this
            .props
            .completed(true);
    }

    private _saveStuff = () : void => {
        //localStorage.setItem('ok', JSON.stringify(allQuestionsFromServer));
        //window.localStorage.setItem('choice', this.state.choice); 
    }

    private _loadStuff = () : void => {
        const storeMe = localStorage.getItem('choice');
        if (storeMe == null) {
            console.log('Sadness no cookie');
        } else {
            console.log('Yay we have cookies', JSON.parse(storeMe));
        }
    }
}
