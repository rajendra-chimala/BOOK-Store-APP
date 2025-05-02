const express = require('express');
const { books } = require('./DB/connection');
require('./DB/connection');

const app = express();
app.use(express.json())

app.get("/api/getbooks",async(req,res)=>{
    const data  = await books.findAll();
    res.json({
        "message":"Book found successfully !",
        data
    })
})

app.post("/api/add-books",async(req,res)=>{


    console.log(req.body);
    const {bookName, bookPrice,bookAuthor} = req.body;
    // if(bookName === "" || bookPrice === "" || bookAuthor === "") return res.json({"message":"Field Cannot be empty !"});


    const newBook = new books({
        bookName,
        bookPrice,
        bookAuthor
    })

    await newBook.save()
    
    // books.
    res.status(200).json({
        "message":"Book Added successfully !"
    })
})


app.put("/api/update-books/:id",(req,res)=>{
    const {id} = req.params;
    res.status(200).json({
        "message":"Book Updated successfully !",
        id
    })
})

app.delete("/api/delete-books/:id",(req,res)=>{
    const {id} = req.params;
    res.status(200).json({
        "message":"Book Deleted successfully !",
        id
    })
})


app.listen(5000,()=>{
    console.log("Server Is Running !")
})