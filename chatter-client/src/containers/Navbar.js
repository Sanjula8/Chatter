import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/logo_transparent.png";

class Navbar extends Component {
	logout = (e) => {
		e.preventDefault();
		this.props.logout();
	};
	render() {
		return (
			<header className="nav-background">
				<div className="logo-image">
					<Link to="/" className="navbar-brand">
						<img src={Logo} alt="chatterHome" className="logo" />
					</Link>
				</div>
				<nav className="nav-link">
					{this.props.currentUser.isAuthenticated ? (
						<ul>
							<li>
								<Link
									to={`/users/${this.props.currentUser.user.id}/messages/new`}
								>
									New Message
								</Link>
							</li>
							<li>
								<a onClick={this.logout}>Log out</a>
							</li>
						</ul>
					) : (
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
							<li>
								<Link to="/signin">Sign In</Link>
							</li>
						</ul>
					)}
				</nav>
			</header>
		);
	}
}

function mapStatetoProps(state) {
	return {
		currentUser: state.currentUser,
	};
}

export default connect(mapStatetoProps, { logout })(Navbar);
