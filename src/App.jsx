import React, { useEffect, useState } from "react";
import ChuckQuote from "./components/ChuckQuote";

function App() {
  const addJoke = () => {
    const jokesContainer = document.getElementById("jokes-container");
    const newJoke = document.createElement("div");
    newJoke.innerHTML = ChuckQuote();
    jokesContainer.appendChild(newJoke);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-slate-50 w-full">
        <div className="p-6 flex container mx-auto max-w-4xl flex-col">
          <h1 className="font-medium text-4xl">Hello World</h1>

          <button className="button my-4" onClick={addJoke}>
            Click Me
          </button>

          <div className="flex flex-col gap-4" id="jokes-container"></div>
        </div>
      </div>
    </>
  );
}

export default App;
