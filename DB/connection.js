const {Sequelize,DataTypes,} = require("sequelize");

require('dotenv').config();


    
const sequelize = new Sequelize(process.env.DB_URL);

sequelize.authenticate().then(()=>{
    console.log("Connected Success !");
}).catch((e)=>{
    console.log("Error : ",e);
})



const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.books = require("./models/book.model")(sequelize,DataTypes);
db.users =require("./models/user.model")(sequelize,DataTypes);

sequelize.sync({force:false}).then(()=>{
    console.log("Migration Success !");
})


module.exports = db;