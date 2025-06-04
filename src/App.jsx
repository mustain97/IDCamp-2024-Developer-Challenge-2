import React from 'react';
import { UserProvider } from './context/UserContext';
import CareerQuiz from './components/CareerQuiz';

export default function App() {
  return (
    <UserProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Educourse Career</h1>
        <CareerQuiz />
        {/* Nanti tambah komponen lain di sini sesuai routing */}
      </div>
    </UserProvider>
  );
}
