export const quizData = {
  status: "success",
  total_questions: 10,
  data: [
    {
      id: 1,
      question: "Which HTML5 element is used to specify a footer for a document or section?",
      options: ["<bottom>", "<footer>", "<section>", "<aside>"],
      correct_answer: "<footer>",
    },
    {
      id: 2,
      question: "In CSS, what is the correct syntax to change the background color of all <p> elements to blue?",
      options: [
        "p {background-color: blue;}",
        "all.p {background-color: blue;}",
        "p.all {background-color: blue;}",
        "p {bg-color: blue;}",
      ],
      correct_answer: "p {background-color: blue;}",
    },
    {
      id: 3,
      question: "Which JavaScript method is used to write text in the browser's console?",
      options: ["console.print()", "console.write()", "console.log()", "print.console()"],
      correct_answer: "console.log()",
    },
    {
      id: 4,
      question: "Which of the following is NOT a React Hook?",
      options: ["useState", "useEffect", "useContex", "useReducer"],
      correct_answer: "useContex",
    },
    {
      id: 5,
      question: "What is the purpose of the 'alt' attribute in an <img> tag?",
      options: [
        "To provide a link to another image",
        "To define the alignment of the image",
        "To provide alternative text if the image cannot be displayed",
        "To set the resolution of the image",
      ],
      correct_answer: "To provide alternative text if the image cannot be displayed",
    },
    {
      id: 6,
      question: "In CSS Flexbox, which property is used to align items along the main axis?",
      options: ["align-items", "justify-content", "align-content", "flex-direction"],
      correct_answer: "justify-content",
    },
    {
      id: 7,
      question: "What does the 'npm' stand for?",
      options: [
        "Node Package Manager",
        "New Progressive Model",
        "Node Process Module",
        "Network Package Manager",
      ],
      correct_answer: "Node Package Manager",
    },
    {
      id: 8,
      question: "In JavaScript, which operator is used for strict equality comparison?",
      options: ["==", "===", "=", "!="],
      correct_answer: "===",
    },
    {
      id: 9,
      question: "Which CSS property is used to make text bold?",
      options: ["font-style", "text-decoration", "font-weight", "bold-text"],
      correct_answer: "font-weight",
    },
    {
      id: 10,
      question: "What is the correct way to link an external CSS file in HTML?",
      options: [
        "<style src='style.css'>",
        "<link rel='stylesheet' href='style.css'>",
        "<script src='style.css'>",
        "<css href='style.css'>",
      ],
      correct_answer: "<link rel='stylesheet' href='style.css'>",
    },
  ],
};
