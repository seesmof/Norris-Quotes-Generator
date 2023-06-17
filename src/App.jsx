import React, { useEffect, useState } from "react";
import ChuckQuote from "./components/ChuckQuote";

function App() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data;
  };

  const updateJoke = async () => {
    const newJoke = await fetchJoke();
    setJoke(newJoke.value);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-slate-50 w-full">
        <div className="p-6 flex container mx-auto max-w-4xl flex-col">
          <h1 className="font-medium text-4xl">Hello World</h1>

          <button className="button my-4" onClick={updateJoke}>
            Click Me
          </button>

          <ChuckQuote joke={joke} />
        </div>
      </div>
    </>
  );
}

export default App;
