import axios from "axios";

export default {
	// findOrCreate: () => {
	// 	return axios.findOrCreate("/auth/openidconnect");
	// },
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
