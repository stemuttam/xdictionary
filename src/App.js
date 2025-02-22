import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [searched, setSearched] = useState(false); // Track if a search was made

  useEffect(() => {
    if (searched && !searchTerm.trim()) {
      setDefinition("Word not found in the dictionary.");
    }
  }, [searched, searchTerm]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setDefinition("Word not found in the dictionary.");
      setSearched(true);
      return;
    }

    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }

    setSearched(true);
  };

  return (
    <div className="xdictionary-container">
      <h1>Dictionary App</h1>  {/* Updated to match test expectations */}
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searched && (
        <div className="definition-box">
          {definition === "Word not found in the dictionary." ? (
            <p>{definition}</p>
          ) : (
            <>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
