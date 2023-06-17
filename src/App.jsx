import React, { useState } from "react";
import ChuckQuote from "./components/ChuckQuote";
import ChuckMobile from "/chuck_mobile.jpg";
import ChuckDesktop from "/chuck_desktop.jpg";

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
      <div className="min-h-screen bg-slate-900 text-slate-50 w-full flex md:items-center">
        <main className="flex md:flex-row flex-col-reverse gap-x-8 lg:gap-x-12 gap-y-6 sm:p-6 p-4 container mx-auto max-w-5xl">
          <section className="flex flex-col flex-1">
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
          </section>

          <article className="md:max-w-xs lg:max-w-sm flex">
            <img
              src={ChuckDesktop}
              alt="Chuck Norris portrait image"
              className="rounded-md hidden md:block"
            />
            <img
              src={ChuckMobile}
              alt="Chuck Norris portrait image"
              className="rounded-md block md:hidden"
            />
          </article>
        </main>
      </div>
    </>
  );
}

export default App;

// TODO: On the mobile version fix padding, reduce it to 4. Also add a top margin instead of centering the container, cause each time the quote gets regenerated and its of different size than it was, the button gets pushed arround the page, not user friendly.
