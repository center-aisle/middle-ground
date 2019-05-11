/***************************
 * Political calculations and machinations
 **************************/

 const politicalquestions = require("./politicalquestions");

let scoreD = 0;
let scoreParty = 0;
const numQuestions = 17;
let politicalType = "";

let scoreDoverQ = (scoreD + scoreParty)/numQuestions;

if ( scoreDoverQ <= 0.125 ) {
    politicalType = "solid liberal";
} else if ( 0.125 < scoreDoverQ && scoreDoverQ <= 0.375 ) {
    politicalType = "liberal";
} else if ( 0.375 < scoreDoverQ && scoreDoverQ <= 0.5625 ) {
    politicalType = "centrist";
} else if ( 0.5625 < scoreDoverQ && scoreDoverQ <= 0.8126 ) {
    politicalType = "conservative";
} else if ( scoreDoverQ > 0.8126 ) {
    politicalType = "core conservative";
} else {
    const err = new Error("error with political calculations");
    console.log(err);
};



/***************************
 * Personal calculations and machinations
 **************************/

 const personalquestions = require("./personalquestions");
 
let outsideScore = 0;
let homeScore = 0;
let sportsScore = 0;
let musicScore = 0;