# Quiz-MVC
Sirma-Academy-Exam-NodeJS-251025

## Description
A modern NodeJS quiz application built with Express.js and Handlebars. Features 6 NodeJS-themed questions with a 10-minute timer and beautiful responsive design.

## Features
- 6 NodeJS multiple-choice questions (A, B, C, D)
- 10-minute countdown timer
- Responsive 2x3 grid layout
- Score calculation and feedback
- Retake quiz functionality
- Modern gradient design

## Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation & Setup

1. **Clone or download the project**
   ```bash
   cd Quiz-MVC
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to: `http://localhost:3000`

## How to Use

1. **Home Page**: Click on "NodeJS Quiz" to start
2. **Quiz Page**: 
   - Answer all 6 questions by selecting A, B, C, or D
   - Watch the timer in the top-right corner
   - Click "Submit" when finished
3. **Results Page**: 
   - View your score and detailed results
   - Click "Retake Quiz" to try again

## Project Structure
```
Quiz-MVC/
├── controllers/     # Request handlers
├── data/           # Quiz questions
├── models/         # Data access layer
├── public/         # Static files (CSS)
├── routes/         # URL routing
├── services/       # Utility functions
├── views/          # Handlebars templates
└── app.js          # Main application file
```

## Technologies Used
- **Backend**: Node.js, Express.js
- **Template Engine**: Handlebars
- **Frontend**: HTML5, CSS3, JavaScript
- **Development**: Nodemon

## Author
Svetlin Garabedyan
