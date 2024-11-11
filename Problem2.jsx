import React, { useState } from "react";

function Problem2() {
  const [number, setNumber] = useState("");
  const [romanNumeral, setRomanNumeral] = useState("");

  const intToRoman = (num) => {
    // Define the mappings of Roman symbols to their integer values, in descending order
    const valueSymbols = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];

    let roman = "";

    // Loop over each (value, symbol) pair
    for (const { value, symbol } of valueSymbols) {
      // Append the symbol while num is larger than or equal to the current value
      while (num >= value) {
        roman += symbol;
        num -= value;
      }
    }

    return roman;
  };

  const handleChange = (event) => {
    const inputNumber = parseInt(event.target.value, 10);
    if (!isNaN(inputNumber)) {
      setNumber(inputNumber);
      setRomanNumeral(intToRoman(inputNumber));
    } else {
      setNumber("");
      setRomanNumeral("");
    }
  };

  return (
    <div>
      <h1>Integer to Roman Numeral Converter</h1>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Enter an integer"
      />
      <p>Roman Numeral: {romanNumeral}</p>
    </div>
  );
}

export default Problem2;
