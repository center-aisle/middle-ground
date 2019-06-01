import axios from "axios";

export default {
    findOrCreate: () => {
        return axios.findOrCreate("http://localhost:3001/auth/openidconnect");
    },
    updateUser: openId => {
        return axios.post("/users", openId);
    },
    getUser: openId => {
        return axios.get("/users", openId);
    }
};
