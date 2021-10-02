const Feedback = require("../model/feedback.model");


//Create a Feedback
const createFeedback= async (req, res) => {
    if (req.body) {

      const feedback = new Feedback(req.body);
         await feedback.save().then(data => {
             console.log(data);
             res.status(200).send(data);
      })
        .catch(err => {
            console.log(err);
            res.send(err);
        });            
    }
}

//get All Feedback
const getAllFeedback = async (req, res) => {
    await Company.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
     });
}


//update Feedback with id
const updateFeedback= async (req, res) => {
    if (req.body) {
        if (!req.body.id) return res.status(500).send("Id is missing");
        let id = req.body.id;
            updateDetails(id, req, (err, feedback) => {
                if (err) return res.status(500).send(err);
                console.log("feedback");
                console.log(feedback);
                res.status(200).send(feedback);
            })
    }
}

function updateDetails(id, req, callback) {
    Feedback.findByIdAndUpdate(id, req.body)
        .then(() => {
            Feedback.findOne({ _id: id }, (err, result) => {
                if (err) {
                    console.log(err);
                    return callback(err);
                } else {
                    var feedback = result;
                    console.log(feedback);
                    return callback(null, feedback);
                }
            });

        })
        .catch(err => {
            console.log(err)
            return callback(err);

        })
}



//delete Feedback
const deleteFeedback = async (req, res) => {
    if (req.body.id) {
        await Feedback.findByIdAndDelete(req.body.id, (err, result) => {
            if (err) return res.status(500).send(err);
            console.log(result);
            return res.status(200).send(result);
        });
    }
}

module.exports = {
    createFeedback,
    getAllFeedback,
    deleteFeedback,
    updateFeedback
}