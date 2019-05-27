import axios from "axios";

export default {
    findOrCreate: function() {
        return axios.findOrCreate("http://localhost:3001/auth/openidconnect");
    },
    updateUser: function(openId) {
        return axios.post("/users", openId);
    },
    getUser: function(openId) {
        return axios.get("/users", openId);
    }
};
