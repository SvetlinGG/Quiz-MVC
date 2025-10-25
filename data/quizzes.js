const quizzes = [
    {
      id: 1,
      title: 'NodeJS Quiz',
      questions: [
        {
          id: 101,
          text: "What is Node.js?",
          options: ["JavaScript framework", "JavaScript runtime", "Database", "Web browser"],
          answer: "JavaScript runtime"
        },
        {
          id: 102,
          text: "Which module creates HTTP server?",
          options: ["fs", "path", "http", "url"],
          answer: "http"
        },
        {
          id: 103,
          text: "What does npm stand for?",
          options: ["Node Package Manager", "New Project Manager", "Node Program Manager", "Network Package Manager"],
          answer: "Node Package Manager"
        },
        {
          id: 104,
          text: "Async file reading method?",
          options: ["fs.readFileSync()", "fs.readFile()", "fs.read()", "fs.open()"],
          answer: "fs.readFile()"
        },
        {
          id: 105,
          text: "What is Express.js?",
          options: ["Database", "Web framework", "Template engine", "Testing framework"],
          answer: "Web framework"
        },
        {
          id: 106,
          text: "Global install command?",
          options: ["npm install package", "npm install -g package", "npm global package", "npm add package"],
          answer: "npm install -g package"
        }
      ]
    }
  ];

module.exports = { quizzes };