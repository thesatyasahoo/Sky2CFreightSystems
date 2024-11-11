import React, { useState } from "react";

function Problem1() {
  const [digits, setDigits] = useState("");
  const [combinations, setCombinations] = useState([]);

  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const getCombinations = (index, currentCombination, digits, results) => {
    // If the combination is complete, add it to the results
    if (index === digits.length) {
      results.push(currentCombination);
      return;
    }

    // Get the letters that correspond to the current digit
    const letters = digitToLetters[digits[index]];
    if (!letters) return;

    // Loop through each letter and continue building the combination
    for (const letter of letters) {
      getCombinations(index + 1, currentCombination + letter, digits, results);
    }
  };

  const handleGenerate = () => {
    if (!digits) {
      setCombinations([]);
      return;
    }

    const results = [];
    getCombinations(0, "", digits, results);
    setCombinations(results);
  };

  return (
    <div>
      <h1>Letter Combinations of a Phone Number</h1>
      <input
        type="text"
        value={digits}
        onChange={(e) => setDigits(e.target.value.replace(/[^2-9]/g, ""))}
        placeholder="Enter digits from 2 to 9"
      />
      <button onClick={handleGenerate}>Generate Combinations</button>

      <div>
        <h2>Combinations:</h2>
        {combinations.length > 0 ? (
          <ul>
            {combinations.map((combination, index) => (
              <li key={index}>{combination}</li>
            ))}
          </ul>
        ) : (
          <p>No combinations generated</p>
        )}
      </div>
    </div>
  );
}

export default Problem1;
