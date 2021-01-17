
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	username: { type: String, required: true },
	title: { type: String, required: true },
	detail: { type: String, required: true },
	offer: {type: String, required: true},
	status: {type: String, required: true},
	category: {type: String, required: true},
	date: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
