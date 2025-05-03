const express = require('express');
const { books } = require('./DB/connection');
const db = require('./DB/connection');
require('./DB/connection');

const app = express();
app.use(express.json())
db

app.use("/api/",require("./Routes/bookRoutes"));

app.listen(5000,()=>{
    console.log("Server Is Running !")
})