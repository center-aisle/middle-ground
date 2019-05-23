const mongoose = require("mongoose");
const db = require("..models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/politicalQuestions"
);

const politicalQuestions = [
    {
        questionOne: 
            {
                answerD: "The government should do more to help needy Americans, even if it means going deeper into debt.",
                answerR: "The government today can't afford to do much more to help the needy."
            },      
        questionTwo:
            {
                answerD: "Government often does a better job than people give it credit for.",
                answerR: "Government is almost always wasteful and inefficient."
            },
        questionThree:
            {
                answerD: "Good diplomacy is the best way to ensure peace.",
                answerR: "The best way to ensure peace is through military strength."
            },
        questionFour:
            {
                answerD: "Racial discrimination is the main reason why many black people can't get ahead these days.",
                answerR: "Blacks who can't get ahead in this country are mostly responsible for their own condition."
            },
        questionFive:
            {
                answerD: "Government regulation of business is necessary to protect the public interest.",
                answerR: "Government regulation of business usually does more harm than good."
            },
        questionSix:
            {
                answerD: "Homosexuality should be accepted by society.",
                answerR: "Homosexuality should be discouraged by society."
            },
        questionSeven:
            {
                answerD: "Business corporations make too much profit.",
                answerR: "Most corporations make a fair and reasonable amount of profit."
            },
        questionEight:
            {
                answerD: "Stricter environmental laws and regulations are worth the cost.",
                answerR: "Stricter environmental laws and regulations cost too many jobs and hurt the economy."
            },
        questionNine:
            {
                answerD: "Immigrants today strengthen our country because of their hard work and talents.",
                answerR: "Immigrants today are a burden on our country because they take our jobs, housing and health care."
            },
        questionTen:
            {
                answerD: "Poor people have hard lives because government benefits don't go far enough to help them live decently.",
                answerR: "Poor people today have it easy because they can get government benefits without doing anything in return."
            },
        questionEleven:
            {
                answerD: "The economic system in this country unfairly favors powerful interests.",
                answerR: "The economic system in this country is generally fair to most Americans."
            },
        questionTwelve:
            {
                answerD: "Our country needs to continue making changes to give blacks equal rights with whites.",
                answerR: "Our country has made the changes needed to give blacks equal rights with whites."
            },
        questionThirteen:
            {
                answerD: "It's best for the future of our country to be active in world affairs.",
                answerR: "We should pay less attention to problems overseas and concentrate on problems here at home."
            },
        questionFourteen:
            {
                answerD: "Hard work and determination are no guarantee of success for most people.",
                answerR: "Most people who want to get ahead can make it if they're willing to work hard."
            },
        questionFifteen:
            {
                answerD: "There are still significant obstacles that make it harder for women to get ahead than men.",
                answerR: "The obstacles that once made it harder for women than men to get ahead are now largely gone."
            },
        questionSixteen:
            {
                answerD: "In foreign policy, the U.S. should take into account the interests of its allies even if it means making compromises with them.",
                answerR: "In foreign policy, the U.S. should follow its own national interests even when its allies strongly disagree."
            },
        questionSeventeen:
            {
                answerD: "Democrat",
                answerI: "Independent",
                answerR: "Republican"
            }
    }
];

db.Questions
//get -> /users -> get all users
///users/:id -> for specific user

// 
// post -> /users -> create new
// patch/:id -> for part of an update
// put/:id -> for updating the whole id

//cannot do post /users/updates:id because then there would be an error

//api routes talk to the controller. controller has it's own access into the database. API is what is seen on the webpage URL, controllers is the back end. 