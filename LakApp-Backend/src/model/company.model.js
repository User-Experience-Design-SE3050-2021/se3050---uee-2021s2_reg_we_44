const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    address: { type: String, required: true},
    contactNo: { type: Number, required: true},
    category: {type:String, required:true},
    images:{type:Array,required:true},
    description:{type:String,required:true},
    
    
});

const Company = mongoose.model('company', CompanySchema);
module.exports = Company;