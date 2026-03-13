"use client";
import { useQuiz } from "../questions/QuizContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trophy, RefreshCcw, CheckCircle2, ChevronRight } from "lucide-react";

export default function ResultPage() {
  const { score, totalQuestions, resetQuiz } = useQuiz();
  const finalScore = score * 10;
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-[family-name:var(--font-roboto)]">
      <Card className="w-full max-w-md shadow-2xl border-slate-200 overflow-hidden">
        
        <CardHeader className="text-center pt-10 pb-6">
          <div className="mx-auto w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <Trophy className="w-10 h-10 text-blue-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900">Quiz Completed!</CardTitle>
          <CardDescription className="text-lg font-medium text-slate-500">
            Here's how you performed
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 pb-10">
          {/* Score Display */}
          <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 shadow-inner">
            <div className="text-6xl font-black text-blue-600 mb-2">
              {finalScore}<span className="text-2xl text-slate-400">/100</span>
            </div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Final Score</p>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-emerald-600">{score}</div>
              <div className="text-xs text-emerald-600/70 font-bold uppercase">Correct</div>
            </div>
            <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-slate-600">{percentage}%</div>
              <div className="text-xs text-slate-600/70 font-bold uppercase">Accuracy</div>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            onClick={resetQuiz}
            className="w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 gap-2 transition-all hover:scale-[1.02]"
          >
            <RefreshCcw className="w-5 h-5" /> Play Again
          </Button>
        </CardContent>
      </Card>

      {/* <p className="mt-8 text-slate-400 font-medium flex items-center gap-1 cursor-pointer hover:text-slate-600 transition-colors">
        View detailed breakdown <ChevronRight className="w-4 h-4" />
      </p> */}
    </div>
  );
}
