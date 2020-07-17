import React, { Component } from "react";
import "./authForm.css";

export default class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: "",
			profileImageUrl: "",
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const authType = this.props.signUp ? "signup" : "signin";
		this.props
			.onAuth(authType, this.state)
			.then(() => {
				this.props.history.push("/");
			})
			.catch(() => {
				return;
			});
	};

	render() {
		const { email, username, password, profileImageUrl } = this.state;
		const {
			heading,
			buttonText,
			signUp,
			errors,
			history,
			removeError,
		} = this.props;

		history.listen(() => {
			removeError();
		});

		return (
			<div>
				<div className="auth-container">
					<div className="authform">
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{errors.message && (
								<div className="alert">{errors.message}</div>
							)}
							<label htmlFor="email">Email:</label>
							<input
								className="form-control"
								id="email"
								name="email"
								value={email}
								onChange={this.handleChange}
								type="text"
							/>

							<label htmlFor="email">Password:</label>
							<input
								className="form-control"
								id="password"
								name="password"
								value={password}
								onChange={this.handleChange}
								type="password"
							/>
							{signUp && (
								<div>
									<label htmlFor="email">Username:</label>
									<input
										className="form-control"
										id="username"
										name="username"
										value={username}
										onChange={this.handleChange}
										type="text"
									/>

									<label htmlFor="email">Image URL:</label>
									<input
										className="form-control"
										id="image-url"
										name="profileImageUrl"
										onChange={this.handleChange}
										type="text"
										value={profileImageUrl}
									/>
								</div>
							)}
							<button type="submit" className="submit-button">
								{buttonText}
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
