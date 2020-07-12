import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user,
	};
}

export function authUser(type, userData) {
	return (dispatch) => {
		// Wrap the thunk in a promise so it can wait for the API call
		return new Promise((resolve, reject) => {
			return apiCall("post", `/api/auth/${type}`, userData)
				.then(({ token, ...user }) => {
					localStorage.setItem("jwtToken", token);
					dispatch(setCurrentUser(user));
					resolve(); // Indicates the API call was a success
				})
				.catch((err) => {
					reject(); // Indicates the API call failed
				});
		});
	};
}
