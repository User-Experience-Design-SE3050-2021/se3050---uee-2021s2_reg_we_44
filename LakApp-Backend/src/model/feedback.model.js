const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    description: { type: String, required: true},
    rating: { type: Number, required: true},
   
});

const Feedback = mongoose.model('feedback', FeedbackSchema);
module.exports = Feedback;