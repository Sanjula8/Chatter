const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
		maxlength: 160,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

messageSchema.pre("remove", async function (next) {
	try {
		//Find user
		let user = await User.findById(this.userId);
		//Remove Id of message from their messages list
		user.message.remove(this.id);
		// Save user
		await user.save();
		return next();
	} catch (err) {
		return next(err);
	}
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
