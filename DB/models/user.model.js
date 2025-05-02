const userModle = (sequelize,DataTypes)=>{
    const User =  sequelize.define("user",{
        userName:{
            type: DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING,
        },
        bookAuthor:{
            type: DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING
        }
    })

    return User;

}

module.exports = userModle;