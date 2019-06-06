import axios from "axios";

export default {
	createUser: (openId: any, firstName: any, lastName: any, email: any, picture: any) => {
		return axios.post("/auth/openidconnect", {openId, firstName, lastName, email, picture}); // this might be a problem later with findOrCreate
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
