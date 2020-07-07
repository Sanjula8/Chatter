const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/chatter", {
	keepAlive: true,
	useMongoClient: true,
});
