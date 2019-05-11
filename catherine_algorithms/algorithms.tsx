let scoreD = 0;
let scoreParty;
const questions = 16;

let scoreDoverQ = (scoreD/questions);

// switch (scoreDoverQ) {
//     case (scoreDoverQ <= 0.125):
//         //someting;
//         break;
//     case()
// }

if ( scoreDoverQ <= 0.125 ) {
    // return strong liberal
} else if ( 0.125 < scoreDoverQ && scoreDoverQ <= 0.375 ) {
    // return liberal
} else if ( 0.375 < scoreDoverQ && scoreDoverQ <= 0.5625 ) {
    // return independent
} else if ( 0.5625 < scoreDoverQ && scoreDoverQ <= 0.8126 ) {
    // return conservative
} else {
    // return strong conservative
}