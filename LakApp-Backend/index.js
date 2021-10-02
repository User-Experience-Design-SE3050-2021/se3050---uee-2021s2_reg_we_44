const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require("./src/config/database");
const CompanyAPI = require("./src/api/company.api");
const FeedbackAPI = require("./src/api/feedback.api");


const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

app.use("/company", CompanyAPI());
app.use("/feedback", FeedbackAPI());


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});