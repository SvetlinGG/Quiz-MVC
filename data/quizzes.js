const quizzes = [
    {
      id: 1,
      title: 'NodeJS Quiz',
      questions: [
        {
          id: 101,
          text: "What is Node.js?",
          options: ["A) JavaScript framework", "B) JavaScript runtime", "C) Database", "D) Web browser"],
          answer: "B) JavaScript runtime"
        },
        {
          id: 102,
          text: "Which module creates HTTP server?",
          options: ["A) fs", "B) path", "C) http", "D) url"],
          answer: "C) http"
        },
        {
          id: 103,
          text: "What does npm stand for?",
          options: ["A) Node Package Manager", "B) New Project Manager", "C) Node Program Manager", "D) Network Package Manager"],
          answer: "A) Node Package Manager"
        },
        {
          id: 104,
          text: "Async file reading method?",
          options: ["A) fs.readFileSync()", "B) fs.readFile()", "C) fs.read()", "D) fs.open()"],
          answer: "B) fs.readFile()"
        },
        {
          id: 105,
          text: "What is Express.js?",
          options: ["A) Database", "B) Web framework", "C) Template engine", "D) Testing framework"],
          answer: "B) Web framework"
        },
        {
          id: 106,
          text: "Global install command?",
          options: ["A) npm install package", "B) npm install -g package", "C) npm global package", "D) npm add package"],
          answer: "B) npm install -g package"
        }
      ]
    }
  ];

module.exports = { quizzes };