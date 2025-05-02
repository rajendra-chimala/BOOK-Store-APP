const bookModel = (sequelize,DataTypes)=>{
    const Book =  sequelize.define("book",{
        bookName:{
            type: DataTypes.STRING
        },
        bookPrice:{
            type:DataTypes.INTEGER,
        },
        bookAuthor:{
            type: DataTypes.STRING,
        }
    })

    return Book;

}

module.exports = bookModel;