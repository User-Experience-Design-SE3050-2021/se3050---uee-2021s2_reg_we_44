const express = require('express');
const router = express.Router();
const CompanyController = require('../controller/company.controller');

module.exports = function (){
    router.get('/', CompanyController.getAllCompany);
    router.post('/create', CompanyController.createCompany);
    router.put('/update', CompanyController.updateCompany);
    router.delete('/delete/:id',CompanyController.deleteCompany);
    return router;
}
