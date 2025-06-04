import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const questions = [
  {
    id: 1,
    question: "Apa minat utama kamu?",
    options: ["Teknologi", "Bisnis", "Desain", "Lainnya"],
  },
  {
    id: 2,
    question: "Skill apa yang kamu kuasai?",
    options: ["Pemrograman", "Marketing", "Grafis", "Lainnya"],
  },
];

export default function CareerQuiz() {
  const { userData, setUserData } = useContext(UserContext);
  const [answers, setAnswers] = useState(userData.quizAnswers || {});

  const handleChange = (id, option) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  };

  const handleSubmit = () => {
    setUserData((prev) => ({ ...prev, quizAnswers: answers }));
    alert("Jawaban tersimpan!");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Career Quiz</h2>
      {questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p className="font-medium">{q.question}</p>
          {q.options.map((opt) => (
            <label key={opt} className="block ml-4">
              <input
                type="radio"
                name={`question-${q.id}`}
                onChange={() => handleChange(q.id, opt)}
                checked={answers[q.id] === opt}
              />
              <span className="ml-2">{opt}</span>
            </label>
          ))}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Simpan Jawaban
      </button>
    </div>
  );
}
