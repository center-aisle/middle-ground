let mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/middleground");

const politicalQuestions = [
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
            title: 'Are we there yet?',
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
            answerR: `In foreign policy, the U.S. should follow its own national interests even when its allies strongly disagree`,
            buttonLog: `Log in to make your account and see your new best Frenemy!`
        },
    
];

db.PoliticalQuestions
  .remove({})
  .then(() => db.PoliticalQuestions.collection.insertMany(politicalQuestions))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//db.Questions
//get -> /users -> get all users /users/:id -> for specific user

//
// post -> /users -> create new patch/:id -> for part of an update put/:id ->
// for updating the whole id cannot do post /users/updates:id because then there
// would be an error api routes talk to the controller. controller has it's own
// access into the database. API is what is seen on the webpage URL,
// controllers is the back end.