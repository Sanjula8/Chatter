import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/logo_transparent.png";

function mapStatetoProps(state) {
	return {
		currentUser: state.currentUser,
	};
}

function Navbar() {
	return (
		<header className="nav-background">
			<div className="logo-image">
				<Link to="/" className="navbar-brand">
					<img src={Logo} alt="chatterHome" className="logo" />
				</Link>
			</div>
			<nav className="nav-link">
				<ul className="nav navbar-nav navbar-right">
					<li>
						<Link to="/signup">Sign Up</Link>
					</li>
					<li>
						<Link to="/signin">Sign In</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default connect(mapStatetoProps, null)(Navbar);

// import {
// 	AppBar,
// 	Toolbar,
// 	IconButton,
// 	Typography,
// 	Button,
// 	makeStyles,
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// }));

// const classes = useStyles();

/* <>
<div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Chatter
            </Typography>
            <div className="navbar-right">
                <Link to="/signin">
                    <Button color="inherit">Sign In</Button>
                </Link>

                <Link to="/signup">
                    <Button color="inherit">Sign Up</Button>
                </Link>
            </div>
        </Toolbar>
    </AppBar>
</div>
</> */
