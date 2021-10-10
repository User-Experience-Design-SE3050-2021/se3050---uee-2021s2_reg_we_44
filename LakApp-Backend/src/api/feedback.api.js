const express = require('express');
const router = express.Router();
const FeedbackController = require('../controller/feedback.controller');

module.exports = function (){
    router.get('/', FeedbackController.getAllFeedback);
    router.get('/last/', FeedbackController.getAllFeedbackLastInFirst);
    router.post('/create', FeedbackController.createFeedback);
    router.put('/update', FeedbackController.updateFeedback);
    router.delete('/delete/:id',FeedbackController.deleteFeedback);
    return router;
}
