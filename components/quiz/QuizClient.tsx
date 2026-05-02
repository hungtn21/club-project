"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuizQuestion } from "@/lib/types";
import Button from "@/components/ui/Button";

interface Props {
  questions: QuizQuestion[];
}

export default function QuizClient({ questions }: Props) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = questions[step];
  const selected = answers[question.id];
  const isLast = step === questions.length - 1;

  function handleNext() {
    if (!selected) return;
    if (isLast) {
      const params = new URLSearchParams(answers);
      router.push(`/result?${params.toString()}`);
    } else {
      setStep((s) => s + 1);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1.5">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < step
                ? "bg-gray-900"
                : i === step
                  ? "bg-gray-400"
                  : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-2">
          Câu {step + 1} / {questions.length}
        </p>
        <h2 className="text-base font-semibold text-gray-900">
          {question.text}
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() =>
              setAnswers((a) => ({ ...a, [question.id]: option.id }))
            }
            className={`w-full text-left rounded-lg border px-4 py-3 text-sm transition-colors ${
              selected === option.id
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-200 text-gray-700 hover:border-gray-400 bg-white"
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        {step > 0 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Quay lại
          </button>
        ) : (
          <div />
        )}
        <Button variant="primary" onClick={handleNext} disabled={!selected}>
          {isLast ? "Xem kết quả" : "Tiếp theo →"}
        </Button>
      </div>
    </div>
  );
}
