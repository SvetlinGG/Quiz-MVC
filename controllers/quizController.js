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
};

exports.submitQuiz = (req, res) => {
    const quiz = getQuizById(req.params.id);

    if (!quiz) return res.status(404).send('Quiz not found');

    const userAnswer = req.body || {};
    let correct = 0;

    const details = quiz.questions.map((q, i) => {
        const user = userAnswer[`q_${q.id}`];
        const isCorrect = user === q.answer;

        if (isCorrect) correct ++;
        return {
            index: i + 1,
            question: q.text,
            user,
            correctAnswer: q.answer,
            isCorrect
        };
    });

    res.render('results', {
        title: quiz.title,
        quizId: quiz.id,
        total: quiz.questions.length,
        correct,
        details,
        scoreMsg: correct === quiz.questions.length
          ? 'Great job'
          : (correct >= quiz.questions.length * 0.6 ? 'Nice try!' : 'Try again!')
    });
};