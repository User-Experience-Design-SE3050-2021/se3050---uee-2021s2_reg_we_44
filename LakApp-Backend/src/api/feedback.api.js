const express = require('express');
const router = express.Router();
const FeedbackController = require('../controller/feedback.controller');

module.exports = function (){
    router.get('/', FeedbackController.getAllFeedback);
    router.post('/create', FeedbackController.createFeedback);
    router.put('/update', FeedbackController.updateFeedback);
    router.delete('/delete',FeedbackController.deleteFeedback);
    return router;
}
