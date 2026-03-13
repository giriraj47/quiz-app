import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function QuestionCard({ 
  questionData, 
  onNext, 
  onPrev, 
  onSelect,
  selectedOption,
  currentIndex, 
  totalQuestions 
}) {
  if (!questionData) return null;

  const hasAnswered = !!selectedOption;

  return (
    <Card className="w-full max-w-md shadow-lg border-slate-200 font-[family-name:var(--font-roboto)]">
      <CardHeader>
        <div className="flex justify-between items-center mb-1">
          <CardTitle className="text-xl font-bold">Question {questionData.id}</CardTitle>
          <span className="text-sm font-semibold bg-slate-100 px-2 py-1 rounded text-slate-600">
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>
        <CardDescription className="font-medium">
          {hasAnswered ? "Answer revealed details below." : "Select the correct option to proceed."}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-lg font-bold text-slate-800 mb-6 leading-tight">
          {questionData.question}
        </p>

        <div className="flex flex-col gap-3">
          {questionData.options.map((option, index) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === questionData.correct_answer;
            
            let variant = "outline";
            let className = "justify-between h-auto py-4 px-4 text-left whitespace-normal transition-all duration-200 font-medium";
            
            if (hasAnswered) {
              if (isCorrect) {
                variant = "default";
                className += " bg-emerald-500 hover:bg-emerald-600 border-emerald-500 text-white";
              } else if (isSelected) {
                variant = "destructive";
                className += " bg-rose-500 hover:bg-rose-600 border-rose-500 text-white";
              } else {
                className += " opacity-50 grayscale-[0.5]";
              }
            } else if (isSelected) {
              variant = "default";
              className += " ring-2 ring-blue-500 ring-offset-2";
            } else {
              className += " hover:bg-slate-50";
            }

            return (
              <Button 
                key={index} 
                variant={variant} 
                className={className}
                onClick={() => !hasAnswered && onSelect(questionData.id, option, isCorrect)}
                disabled={hasAnswered && !isSelected && !isCorrect}
              >
                <span className="flex-1">
                  <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </span>
                {hasAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 ml-2 shrink-0" />}
                {hasAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 ml-2 shrink-0" />}
              </Button>
            );
          })}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center border-t border-slate-100 pt-6 mt-2">
        <Button 
          variant="outline" 
          onClick={onPrev} 
          disabled={currentIndex === 0}
          className="gap-2 font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </Button>
        
        <Button 
          variant="default" 
          onClick={onNext} 
          disabled={!hasAnswered}
          className={`gap-2 font-bold ${hasAnswered ? "bg-blue-600 hover:bg-blue-700" : ""}`}
        >
          {currentIndex === totalQuestions - 1 ? "Finish Quiz" : "Next"} <ArrowRight className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
