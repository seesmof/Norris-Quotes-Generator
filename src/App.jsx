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
      <div className="min-h-screen bg-slate-900 text-slate-50 w-full flex items-center justify-center">
        <div className="flex flex-row gap-12 p-6 container mx-auto max-w-5xl">
          <div className="flex flex-col flex-1">
            <h1 className="font-medium text-4xl border-b pb-4 border-slate-400">
              Chuck Norris Quotes
            </h1>
            <p className="text-lg pt-4">
              This is a simple application that uses Chuck Norris API to get a
              random joke. All you have to do is to click the button below.
            </p>

            <button className="button capitalize my-4" onClick={updateJoke}>
              generate joke
            </button>

            <ChuckQuote joke={joke} />
          </div>

          <div className="hidden max-w-sm lg:flex">
            <img
              src="/chuck.jpg"
              alt="Chuck Norris portrait image"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
