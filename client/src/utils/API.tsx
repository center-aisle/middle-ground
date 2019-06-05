import axios from "axios";

export default {
	createUser: () => {
		return axios.post("/auth/openidconnect"); // this might be a problem later
	},
	updateUser: (openId: any) => {
		return axios.post("/api/users", openId);
	},
	getUser: (openId: any) => {
		return axios.get("/api/users", openId);
	},
	  // Gets all political questions
	getPoliticalQuestions: () => {
		return axios.get("/api/politicalQuestions");
	},
	getPersonalQuestions: () => {
		return axios.get("/api/personalQuestions");
	}
};
