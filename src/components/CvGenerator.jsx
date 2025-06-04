import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export default function CvGenerator() {
  const { userData, setUserData } = useContext(UserContext);
  const [cvData, setCvData] = useState(userData.cvData || {
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
  });

  useEffect(() => {
    setUserData((prev) => ({ ...prev, cvData }));
  }, [cvData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownload = () => {
    const content = `
      Nama: ${cvData.name}
      Email: ${cvData.email}
      Telepon: ${cvData.phone}
      
      Summary:
      ${cvData.summary}
      
      Experience:
      ${cvData.experience}
      
      Education:
      ${cvData.education}
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "cv.txt";
    link.href = URL.createObjectURL(blob);
    link.click();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">CV Generator</h2>
      <form className="space-y-4">
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="name"
            value={cvData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={cvData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label>Telepon:</label>
          <input
            type="tel"
            name="phone"
            value={cvData.phone}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label>Summary:</label>
          <textarea
            name="summary"
            value={cvData.summary}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label>Experience:</label>
          <textarea
            name="experience"
            value={cvData.experience}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label>Education:</label>
          <textarea
            name="education"
            value={cvData.education}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <button
          type="button"
          onClick={handleDownload}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Download CV
        </button>
      </form>
    </div>
  );
}
