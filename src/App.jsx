
import React, { useState, useEffect } from 'react';

const wordsByDay = [
  { day: 1, words: ['Hello', 'Goodbye', 'Please', 'Thanks', 'Yes'] },
  { day: 2, words: ['Morning', 'Evening', 'Night', 'Food', 'Water'] },
  { day: 3, words: ['House', 'Car', 'Street', 'Shop', 'Friend'] },
  { day: 4, words: ['Beautiful', 'Strong', 'Fast', 'Slow', 'Happy'] },
  { day: 5, words: ['Difficult', 'Easy', 'Interesting', 'Boring', 'Fun'] },
];

function App() {
  const [day, setDay] = useState(1);
  const [words, setWords] = useState(wordsByDay[0].words);

  useEffect(() => {
    const start = new Date('2025-08-11');
    const now = new Date();
    const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    const currentDay = Math.min(diffDays + 1, wordsByDay.length);
    setDay(currentDay);
    setWords(wordsByDay[currentDay - 1].words);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">Objectif Canada</h1>
      <p className="mb-6 text-center">Jour {day} - Apprends ces mots en anglais :</p>
      <ul className="list-disc list-inside text-lg space-y-2 max-w-md mx-auto">
        {words.map((word) => (
          <li key={word} className="bg-white p-3 rounded shadow">{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
