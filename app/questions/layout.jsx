"use client";
import { QuizProvider, useQuiz } from "./QuizContext";

function QuizLayoutContent({ children }) {
  const { score, progress, currentIndex, totalQuestions } = useQuiz();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md mb-6 bg-white p-7 rounded-2xl shadow-md border border-slate-100 space-y-3">
        <div className="flex justify-between items-start">
          <div className="space-y-0.5">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Your Progress</p>
            <h2 className="text-[#1d4ed8] text-2xl font-bold font-[family-name:var(--font-roboto)]">{Math.round(progress)}%</h2>
          </div>
          <div className="flex flex-col items-end pt-1">
            <div className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-100">
              Score: {score * 10}/100
            </div>
          </div>
        </div>

        <div className="w-full h-4 bg-[#e2e8f0]/50 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] transition-all duration-1000 ease-in-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Question Card (children) */}
      <main className="w-full flex justify-center">
        {children}
      </main>
    </div>
  );
}

export default function QuestionsLayout({ children }) {
  return (
    <QuizLayoutContent>{children}</QuizLayoutContent>
  );
}
