const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    companyName: { type: String, required: true},
    description: { type: String},
    rating: { type: Number, required: true},
    anonymous: { type: String, required: true},
    date: { type: Date, required: true},
   
});

const Feedback = mongoose.model('feedback', FeedbackSchema);
module.exports = Feedback;