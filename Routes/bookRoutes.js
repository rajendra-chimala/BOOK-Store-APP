const express = require("express");
const { getAll, addBook, updateBook, deleteBook, getBookByID, deleteAll } = require("../Controllers/bookController");

const router = express.Router();

router.get("/getbooks",getAll);
router.post("/add-book",addBook);
router.get("/getabook/:id",getBookByID)
router.put("/update-books/:id",updateBook);
router.delete("/delete-books/:id",deleteBook)
router.delete("/delete-all",deleteAll)

module.exports = router