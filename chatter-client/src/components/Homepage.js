import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
	<div className="home-hero">
		<h1>What's Happening?</h1>
		<h4>New to Chatter?</h4>
		<Link to="/signup">
			<button className="signup-button">Sign Up Here</button>
		</Link>
	</div>
);

export default Homepage;
