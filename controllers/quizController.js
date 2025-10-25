const { getQuizById, listQuizzes } = require('../models/quizRepo.js');
const { shuffleArray } = require('../services/shuffle.js');

exports.home = (req, res) => {
    const items = listQuizzes();
    res.render('home', { title: 'Available Quizzes', items});
};

exports.showQuiz = (req, res) => {
    const quiz = getQuizById(req.params.id);
    if (!quiz) return res.status(404).send('Quiz not found');

    const shuffledQuestions = shuffleArray(quiz.questions).map( q => ({
        ...q,
        options: shuffleArray(q.options)
    }));

    res.render('quiz', {
        title: quiz.title,
        quizId: quiz.id,
        questions: shuffledQuestions
    });
}