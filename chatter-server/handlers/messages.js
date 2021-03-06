const db = require("../models");

// POST Route: /api/users/:id/messages
exports.createMessage = async function (req, res, next) {
	try {
		let message = await db.Message.create({
			text: req.body.text,
			user: req.params.id,
		});
		let foundUser = await db.User.findById(req.params.id);
		foundUser.message.push(message.id);
		await foundUser.save();
		let foundMessage = await await db.Message.findById(
			message._id
		).populate("user", {
			username: true,
			profileImageUrl: true,
		});
		return res.status(200).json(foundMessage);
	} catch (err) {
		return next(err);
	}
};

// GET Route: /api/users/:id/message/:message_id
exports.getMessage = async function (req, res, next) {
	try {
		let message = await db.Message.find(req.params.message._id);
		return res.status(200).json(message);
	} catch (err) {
		return next(err);
	}
};

exports.deleteMessage = async function (req, res, next) {
	try {
		let foundMessage = await db.Message.findById(req.params.message._id);
		await foundMessage.remove();
		return res.status(200).json(foundMessage);
	} catch (err) {
		return next(err);
	}
};
