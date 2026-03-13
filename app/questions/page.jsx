"use client";
import QuestionCard from "@/components/QuestionCard";
import { useQuiz } from "./QuizContext";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuizPage() {
  const { 
    currentIndex, 
    questions, 
    handleNext, 
    handlePrev, 
    selectOption, 
    answers,
    loading,
    error,
    resetQuiz
  } = useQuiz();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 space-y-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="text-slate-500 font-bold animate-pulse">Loading amazing questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border border-red-100 max-w-md mx-auto">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">Oops! Something went wrong</h3>
        <p className="text-slate-500 text-center mb-6">{error}</p>
        <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700 font-bold">
          Try Again
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) return null;

  return (
    <div className="flex items-center justify-center">
      <QuestionCard 
        questionData={currentQuestion} 
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelect={selectOption}
        selectedOption={answers[currentQuestion.id]}
      />
    </div>
  );
}
