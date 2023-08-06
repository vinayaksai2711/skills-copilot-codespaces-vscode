//creatre web server
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

//get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

//get specific comment
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.json(comment);
    } catch (err) {
        res.json({ message: err });
    }
});

//add comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        text: req.body.text,
    });
    try {
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

//delete comment
router.delete('/:id', async (req, res) => {
    try {
        const removedComment = await Comment.remove({ _id: req.params.id });
        res.json(removedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

//update comment
router.patch('/:id', async (req, res) => {
    try {
        const updatedComment = await Comment.updateOne(
            { _id: req.params.id },
            { $set: { text: req.body.text } }
        );
        res.json(updatedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;