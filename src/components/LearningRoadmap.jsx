import React from "react";

const roadmap = [
  { step: 1, title: "Pelajari Dasar Pemrograman", description: "Mulai dengan HTML, CSS, dan JavaScript." },
  { step: 2, title: "Framework Frontend", description: "Pelajari React atau Vue." },
  { step: 3, title: "Backend", description: "Pelajari Node.js atau Python." },
  { step: 4, title: "Deploy", description: "Pelajari cara deploy aplikasi." },
];

export default function LearningRoadmap() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Skill-based Learning Roadmap</h2>
      <ol className="list-decimal list-inside space-y-2">
        {roadmap.map((item) => (
          <li key={item.step} className="p-2 border rounded">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
