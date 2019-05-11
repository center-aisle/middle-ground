/***************************
 * Need code to capture information from front end 
 *****************************/






/***************************
 * Political calculations and machinations
 **************************/

const politicalQuestions = require("./politicalQuestions");
const allUsersArray = require("./allUsersArray");

let scoreD = 0;
let scoreParty = 0;
const numQuestions = 17;
let politicalType = "";
let politicalScore = 0;
let currentUser = {};
let allUsers = [];
let matchingPoliticalUsers = [];

let scoreDoverQ = (scoreD + scoreParty)/numQuestions;

if ( scoreDoverQ <= 0.125 ) {
    politicalType = "solid liberal";
    politicalScore = -2;
} else if ( 0.125 < scoreDoverQ && scoreDoverQ <= 0.375 ) {
    politicalType = "liberal";
    politicalScore = -1;
} else if ( 0.375 < scoreDoverQ && scoreDoverQ <= 0.5625 ) {
    politicalType = "centrist";
    politicalScore = 0;
} else if ( 0.5625 < scoreDoverQ && scoreDoverQ <= 0.8126 ) {
    politicalType = "conservative";
    politicalScore = 1;
} else if ( scoreDoverQ > 0.8126 ) {
    politicalType = "core conservative";
    politicalScore = 2;
} else {
    const err = new Error("error with political calculations");
    console.log(err);
};

// finding users with matching inverse political score
allUsers.forEach(currentValue => {
    if (currentValue.politicalScore === -(currentUser.politicalScore)) {
        matchingPoliticalUsers.push(currentValue);
    }
});



/***************************
 * Personal calculations and machinations
 **************************/

const personalQuestions = require("./personalQuestions");

let outdoorsSelects = [];
let outdoorsMatches = [];
let homeSelects = [];
let homeMatches = [];
let sportsSelects = [];
let sportsMatches = [];
let musicSelects = [];
let musicMatches = [];
let found = false;

// turn true/false into arrays of true choices
// go through each array independently? or all at once? first would be simpler
// 

allUsers.forEach(currentValue => {
    found = currentUser.outdoorSelects.some(choice => currentValue.outdoorSelects.includes(choice)); // returns boolean
    // if found is true then find which ones are the same
    if (found) {
        outdoorsMatches = currentUser.outdoorSelects.filter(function(selected) {
            return !currentValue.includes(selected); // removes activities in currentValue's array that don't match with currentUser's array
        });
    };
});

allUsers.forEach(currentValue => {
    found = currentUser.homeSelects.some(choice => currentValue.homeSelects.includes(choice));
});
allUsers.forEach(currentValue => {
    found = currentUser.sportsSelects.some(choice => currentValue.sportsSelects.includes(choice));
});
allUsers.forEach(currentValue => {
    found = currentUser.musicSelects.some(choice => currentValue.musicSelects.includes(choice));
});

