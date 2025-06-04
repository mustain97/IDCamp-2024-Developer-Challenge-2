import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const questions = [
  { id: 1, question: "Apa minat utama kamu?", options: ["Teknologi", "Bisnis", "Desain", "Lainnya"] },
  { id: 2, question: "Skill apa yang kamu kuasai?", options: ["Pemrograman", "Marketing", "Grafis", "Lainnya"] },
  // Tambah sesuai kebutuhan
];

export default function CareerQuiz() {
  const { userData, setUserData } = useContext(UserContext);
  const [answers, setAnswers] = useState({});

  const handleChange = (id, option) => {
    setAnswers(prev => ({ ...prev, [id]: option }));
  };

  const handleSubmit = () => {
    setUserData(prev => ({ ...prev, quizAnswers: answers }));
    alert('Jawaban tersimpan!');
  };

  return (
    <div>
      <h2>Career Quiz</h2>
      {questions.map(q => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map(opt => (
            <label key={opt}>
              <input
                type="radio"
                name={`question-${q.id}`}
                onChange={() => handleChange(q.id, opt)}
                checked={answers[q.id] === opt}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Simpan Jawaban</button>
    </div>
  );
}
