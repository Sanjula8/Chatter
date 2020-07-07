const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	profileImageUrl: {
		type: String,
	},
});

//Before each document is saved, asycn function is run.  Hashes password and then moves onto next middleware to save so hashed passwords are saved.

userSchema.pre("save", async function (next) {
	try {
		if (!this.isModified("password")) {
			return next();
		}

		//Salting - additional information into hash so the hashes are different for the same password.

		let hashedPasswored = await bcrypt.hash(this.password, 10);
		this.password = hashedPasswored;
		return next();
	} catch (err) {
		//Goes to error handler
		return next(err);
	}
});

//Password comparison function.  Every document is able to compare a hashed password in the database to compare with the hashed passwords in the database.

userSchema.method.comparePassword = async function (candidatePassword, next) {
	try {
		let isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch;
	} catch (err) {
		return next(err);
	}
};

const User = mongoose.model("User", userSchema);

module.exports = user;
