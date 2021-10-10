const Company = require("../model/company.model");


//Create a Company
const createCompany = async (req, res) => {
    if (req.body) {

      const company = new Company(req.body);
         await company.save().then(data => {
             console.log(data);
             res.status(200).send(data);
      })
        .catch(err => {
            console.log(err);
            res.send(err);
        });            
    }
}

//get All Company
const getAllCompany = async (req, res) => {
    
    await Company.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
     });
}


//update Company with id

const updateCompany = async (req, res) => {
    if (req.body) {
        if (!req.body.id) return res.status(500).send("Id is missing");
        let id = req.body.id;
            updateDetails(id, req, (err, company) => {
                if (err) return res.status(500).send(err);
                console.log("company");
                console.log(company);
                res.status(200).send(company);
            })
    }
}

function updateDetails(id, req, callback) {
    Company.findByIdAndUpdate(id, req.body)
        .then(() => {
            Company.findOne({ _id: id }, (err, result) => {
                if (err) {
                    console.log(err);
                    return callback(err);
                } else {
                    var company = result;
                    console.log(company);
                    return callback(null, company);
                }
            });

        })
        .catch(err => {
            console.log(err)
            return callback(err);

        })
}



//delete Company
const deleteCompany = async (req, res) => {
    console.log("req",req.params.id)
    if (req.params.id) {
        await Company.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) return res.status(500).send(err);
            console.log(result);
            return res.status(200).send(result);
        });
    }
}

module.exports = {
    createCompany,
    getAllCompany,
    deleteCompany,
    updateCompany
}