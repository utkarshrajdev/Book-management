// routes/books.js

const express = require('express');
const Book = require('../models/book');
const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single book by ID
router.get('/:id', getBook, (req, res) => {
    res.json(res.book);
});

// Create a new book
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate,
        pages: req.body.pages,
        genre: req.body.genre,
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a book by ID
router.put('/:id', getBook, async (req, res) => {
    if (req.body.title != null) {
        res.book.title = req.body.title;
    }
    if (req.body.author != null) {
        res.book.author = req.body.author;
    }
    if (req.body.publishedDate != null) {
        res.book.publishedDate = req.body.publishedDate;
    }
    if (req.body.pages != null) {
        res.book.pages = req.body.pages;
    }
    if (req.body.genre != null) {
        res.book.genre = req.body.genre;
    }

    try {
        const updatedBook = await res.book.save();
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a book by ID
router.delete('/:id', getBook, async (req, res) => {
    try {
        await Book.deleteOne({ _id: res.book._id });
        res.json({ message: 'Deleted Book' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get a book by ID
async function getBook(req, res, next) {
    let book;
    try {
        book = await Book.findById(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Cannot find book' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.book = book;
    next();
}

module.exports = router;
