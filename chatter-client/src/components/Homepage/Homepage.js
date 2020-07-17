import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";

const Homepage = () => (
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

export default Homepage;
