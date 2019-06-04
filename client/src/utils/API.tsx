import axios from "axios";

export default {
    findOrCreate: function() {
        return axios.findOrCreate("http://localhost:3001/auth/openidconnect");
    },
    updateUser: function(openId: any) {
        return axios.post("/users", openId);
    },
    getUser: function(openId: any) {
        return axios.get("/users", openId);
    },
    // Gets all political questions
    getPoliticalQuestions: function() {
    return axios.get("/api/politicalQuestions");
    }
};
