const quizzes = [
    {
      id: 1,
      title: 'MVC & Web Basics',
      questions: [
        {
          id: 101,
          text: "Which method is used to define a GET route in Express?",
          options: ["app.route()", "app.get()", "express.get()", "router.create()"],
          answer: "app.get()"
        },
        {
          id: 102,
          text: "In MVC architecture, what does the 'C' stand for?",
          options: ["Code", "Controller", "Class", "Content"],
          answer: "Controller"
        },
        {
          id: 103,
          text: "Which part of MVC handles user input?",
          options: ["Model", "View", "Controller", "Template"],
          answer: "Controller"
        }
      ]
    }
  ];

module.exports = { quizzes };