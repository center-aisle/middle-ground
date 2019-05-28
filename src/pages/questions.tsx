import React from 'react';
import { Row, CardPanel, Col } from 'react-materialize';
import StepWizard from 'react-step-wizard';
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
        color: 'blue',
        title: '2nd Question',
        answerD: `Government often does a better job than people give it credit for`,
        answerR: `Government is almost always wasteful and inefficient`,
    },
    {
        id: '3',
        color: 'red',
        title: '3rd Question',
        answerD: `Good diplomacy is the best way to ensure peace`,
        answerR: `The best way to ensure peace is through military strength`,
    },
    {
        id: '4',
        color: 'blue',
        title: '4th Question',
        answerD: `Racial discrimination is the main reason why many racial minorities can't get ahead these days`,
        answerR: `Minorities who can't get ahead in this country are mostly responsible for their own condition`,
    },
    {
        id: '5',
        color: 'red',
        title: '5th Question',
        answerD: `Government regulation of business is necessary to protect the public interest`,
        answerR: `Government regulation of business usually does more harm than good`,
    },
    {
        id: '6',
        color: 'blue',
        title: '6th Question',
        answerD: `Homosexuality should be accepted by society`,
        answerR: `Homosexuality should be discouraged by society`,
    },
    {
        id: '7',
        color: 'red',
        title: '7th Question',
        answerD: `Business corporations make too much profit`,
        answerR: `Most corporations make a fair and reasonable amount of profit`,
    },
    {
        id: '8',
        color: 'blue',
        title: '8th Question',
        answerD: `Stricter environmental laws and regulations are worth the cost`,
        answerR: `Stricter environmental laws and regulations cost too many jobs and hurt the economy`,
    },
    {
        id: '9',
        color: 'red',
        title: '9th Question',
        answerD: `Immigrants today strengthen our country because of their hard work and talents`,
        answerR: `Immigrants today are a burden on our country because they take our jobs, housing and health care`,
    },
    {
        id: '10',
        color: 'blue',
        title: '10th Question',
        answerD: `Poor people have hard lives because government benefits don't go far enough to help them live decently`,
        answerR: `Poor people today have it easy because they can get government benefits without doing anything in return`,
    },
    {
        id: '11',
        color: 'red',
        title: '11th Question',
        answerD: `The economic system in this country unfairly favors powerful interests`,
        answerR: `The economic system in this country is generally fair to most Americans`,
    },
    {
        id: '12',
        color: 'blue',
        title: '12th Question',
        answerD: `Our country needs to continue making changes to give African-Americans equal rights with white people`,
        answerR: `Our country has made the changes needed to give African-Americans equal rights with white people`,
    },
    {
        id: '13',
        color: 'red',
        title: '13th Question',
        answerD: `It's best for the future of our country to be active in world affairs`,
        answerR: `We should pay less attention to problems overseas and concentrate on problems here at home`,
    },
    {
        id: '14',
        color: 'blue',
        title: '14th Question',
        answerD: `Hard work and determination are no guarantee of success for most people`,
        answerR: `Most people who want to get ahead can make it if they're willing to work hard`,
    },
    {
        id: '15',
        color: 'red',
        title: '15th Question',
        answerD: `There are still significant obstacles that make it harder for women to get ahead than men`,
        answerR: `The obstacles that once made it harder for women than men to get ahead are now largely gone`,
    },
    {
        id: '16',
        color: 'blue',
        title: '16th Question',
        answerD: `In foreign policy, the U.S. should take into account the interests of its allies even if it means making compromises with them`,
        answerR: `In foreign policy, the U.S. should follow its own national interests even when its allies strongly disagree`,
    }
];

class PoliticalQuestionItem extends React.Component<any> {

    render(): JSX.Element {
        const { quest } = this.props;
        return (
            <div key={quest.id} className={quest.color}>
                <h2>{quest.title}</h2>
                <Row>
                    <Col m={6} s={12}>
                        <CardPanel
                            className='teal waves-effect'
                            onClick={() => this._selectedAnswer(quest.answerD)}
                        >
                            <span className='white-text'>
                                {quest.answerD}
                            </span>
                        </CardPanel>
                    </Col>

                    <Col m={6} s={12}>
                        <CardPanel
                            className='teal waves-effect'
                            onClick={() => this._selectedAnswer(quest.answerR)}
                        >
                            <span className='white-text'>
                                {quest.answerR}
                            </span>
                        </CardPanel>
                    </Col>
                </Row>
            </div>
        );
    }

    // TODO: Look up using Redux
    _selectedAnswer = (choice: any): void => {
        console.log('Clicked ', choice);
        this.props.nextStep();
    }
}

export default class PoliticalQuestions extends React.Component<any, ComponentState> {
    state: ComponentState = {
        allQuestions: [],
        activeIndex: 0,
    };

    componentDidMount(): void {
        setTimeout(() => {
            this.setState({
                allQuestions: [...allQuestionsFromServer],
            });
        }, 500);
    }

    render(): JSX.Element {
        return this.state.allQuestions.length === 0 ? (
            <div>LOADING......</div>
        ) : (
            <div className='container'>
                <button onClick={this._onComplete}>DONE!</button>
                <button onClick={this._saveStuff}>SAVE!</button>
                <button onClick={this._loadStuff}>LOAD!</button>
                <StepWizard>
                    {this.state.allQuestions.map((quest, index) => (
                        <PoliticalQuestionItem
                            key={index}
                            quest={quest}
                        />
                    ))}
                </StepWizard>
            </div>
        );
    }

    private _onComplete = (): void => {
        this.props.completed(true);
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
