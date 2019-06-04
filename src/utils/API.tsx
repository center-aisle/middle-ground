import axios from "axios";

export default {
	findOrCreate: () => {
		return axios.findOrCreate("/auth/openidconnect");
	},
	updateUser: openId => {
		return axios.post("/users", openId);
	},
	getUser: openId => {
		return axios.get("/users", openId);
	},
	  // Gets all political questions
	getPoliticalQuestions: () => {
		return axios.get("/api/politicalQuestions");
	},
	getPersonalQuestions: () => {
		return axios.get("/api/personalQuestions");
	}
};
