import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ProgressDashboard() {
  const { userData } = useContext(UserContext);
  const progress = userData.learningProgress || {};

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Progress Dashboard</h2>
      {Object.keys(progress).length === 0 ? (
        <p>Belum ada progres belajar yang tercatat.</p>
      ) : (
        <ul>
          {Object.entries(progress).map(([skill, status]) => (
            <li key={skill}>
              {skill}: {status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
