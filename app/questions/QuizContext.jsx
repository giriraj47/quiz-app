"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const QuizContext = createContext();

// Helper to decode HTML entities returned by OpenTDB
function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export function QuizProvider({ children }) {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
      );
      const data = await response.json();

      if (data.response_code === 0) {
        const formattedQuestions = data.results.map((q, index) => {
          // Combine and shuffle options
          const options = [q.correct_answer, ...q.incorrect_answers]
            .map((opt) => decodeHtml(opt))
            .sort(() => Math.random() - 0.5);

          return {
            id: index + 1,
            question: decodeHtml(q.question),
            correct_answer: decodeHtml(q.correct_answer),
            options: options,
            category: q.category,
          };
        });
        setQuestions(formattedQuestions);
      } else {
        throw new Error("Failed to fetch quiz data from the server.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const totalQuestions = questions.length;
  const progress = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      router.push("/result");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswers({});
    fetchQuestions(); // Fetch fresh questions on reset
    router.push("/questions");
  };

  const selectOption = (questionId, option, isCorrect) => {
    if (!answers[questionId]) {
      if (isCorrect) setScore((prev) => prev + 1);
    } else {
      const previousSelection = answers[questionId];
      const currentQuestion = questions.find((q) => q.id === questionId);
      if (
        previousSelection === currentQuestion.correct_answer &&
        option !== currentQuestion.correct_answer
      ) {
        setScore((prev) => prev - 1);
      } else if (
        previousSelection !== currentQuestion.correct_answer &&
        option === currentQuestion.correct_answer
      ) {
        setScore((prev) => prev + 1);
      }
    }

    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentIndex,
        score,
        answers,
        loading,
        error,
        totalQuestions,
        progress,
        handleNext,
        handlePrev,
        selectOption,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
