import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navbar() {
	return (
		<nav className="navbar navbar-expand">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src="" alt="chatterHome" />
				</Link>
			</div>
			<ul className="nav navbar-nav navbar-right">
				<li>
					<Link to="/signup">Sign Up</Link>
				</li>
				<li>
					<Link to="/signin">Sign In</Link>
				</li>
			</ul>
		</nav>
	);
}

function mapStatetoProps(state) {
	return {
		currentUser: state.currentUser,
	};
}
export default connect(mapStatetoProps, null)(Navbar);
