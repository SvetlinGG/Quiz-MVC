const { quizzes } = require('../data/quizzes.js');

function listQuizzes() {
    return quizzes;
}

function getQuizById(id) {
    return quizzes.find(quiz => quiz.id == id);
}

module.exports = { listQuizzes, getQuizById };