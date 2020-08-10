import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import MessageTimeline from "../MessageTimeLine/MessageTimeline";

const Homepage = ({ currentUser }) => {
	if (!currentUser.isAuthenticated) {
		return (
			<div className="container">
				<div className="home-content">
					<h1>What's Happening?</h1>
					<h4>New to Chatter?</h4>
					<Link to="/signup">
						<button className="signup-button">Sign Up Here</button>
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div>
			<MessageTimeline />
		</div>
	);
};

export default Homepage;
