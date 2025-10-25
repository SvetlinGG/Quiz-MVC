const express = require('express');
const quizController = require('../controllers/quizController.js');
const router = express.Router();

router.get('/', quizController.home);
router.get('/quiz/:id', quizController.showQuiz);
router.post('/quiz/:id/submit', quizController.showQuiz);
router.post('/quiz/:id/retake', (req, res) => res.redirect(`quiz/${req.params.id}`));

module.exports = router