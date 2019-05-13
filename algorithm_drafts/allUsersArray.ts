// might make this a constructor

module.exports = [
    {
        person1: {
            name: "",
            bio: "",
            gender: "", // F/M/Other
            age: 18, // should we put an age limit on this app
            politicalScore: 0,
            personalScore: {
                outdoorsArray: ["camping"],
                homeArray: ["cooking", "gardening"],
                sportsArray: [],
                musicArray: ["pop", "country", "metal"]
            },
            politics: {
                question1: "", // R/D <- might be easier to code answers as numbers (essentially binary except for question 17) and calculate scores using those numbers rather than using % of answers
                question2: "",
                question3: "",
                question4: "",
                question5: "",
                question6: "",
                question7: "",
                question8: "",
                question9: "",
                question10: "",
                question11: "",
                question12: "",
                question13: "",
                question14: "",
                question15: "",
                question16: "",
                question17: "", // R/D/I
            },
            personal: [
               { 
                    outdoors: {
                        hiking: false,
                        camping: false,
                        climbing: false,
                        fishingHunting: false,
                        other: false
                    }
                },
                {
                    home: {
                        reading: false,
                        cooking: false,
                        gardening: false,
                        DIYHomeProjects: false,
                        other: false
                    }
                },
                {
                    sports: {
                        football: false,
                        basketball: false,
                        baseball: false,
                        soccer: false,
                        iceHockey: false,
                        running: false,
                        swimming: false,
                        cycling: false,
                        other: false
                    }
                },
                {
                    music: {
                        pop: false,
                        country: false,
                        rapHipHop: false,
                        rock: false,
                        alternative: false,
                        rnb: false,
                        folk: false,
                        blues: false,
                        metal: false,
                        other: false
                    }
                }
            ]
        }
    }
]