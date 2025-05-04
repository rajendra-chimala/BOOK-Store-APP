const { books } = require("../DB/connection");

const getAll = async (req, res) => {
    
    try {
      const data = await books.findAll(); // no destructuring
      res.json({
        message: "Books found successfully!",
        data
      });
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({ error: "Server error" });
    }
  };
  


const addBook = async(req,res)=>{


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
        "message":"Book Added successfully !",newBook
    })
}


const updateBook = (req,res)=>{
    const {id} = req.params;
    const {bookName,bookPrice,bookAuthor} = req.body;

    

    if(bookName === "" || bookPrice === "" || bookAuthor === "") return res.json({"message":"Atleast one field should be updated !"});

    books.update({
        bookName,
        bookPrice,
        bookAuthor
    },{
        where:{
            id:id
        }
    })


    res.status(200).json({
        "message":"Book Updated successfully !",
        id
    })
}


const deleteBook = async(req,res)=>{
    const id = req.params.id;

    const deleted = await books.destroy({ where: { id } });

    res.status(200).json({
        "message":"Book Deleted successfully !",

        deleted
    })
}



const getBookByID = async (req,res)=>{
    const {id} = req.params;



    
    
    const data = await books.findByPk(id);

    // await books.findAll({
    //     where:{
    //         id:id
    //     }
    // })

    res.json({"message":"Get Successfully !",data})
}
module.exports = {getAll,addBook,updateBook,deleteBook,getBookByID}