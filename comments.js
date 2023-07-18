// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Import middleware
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Create comment
// api/comments
router.post('/',
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('comment', 'Comment must be at least 3 characters').isLength({ min: 3 })
    ],
    commentController.createComment
);

// Get comments by publication
router.get('/',
    auth,
    commentController.getComments
);

// Update comment
router.put('/:id',
    auth,
    commentController.updateComment
);

// Delete comment
router.delete('/:id',
    auth,
    commentController.deleteComment
);

module.exports = router;