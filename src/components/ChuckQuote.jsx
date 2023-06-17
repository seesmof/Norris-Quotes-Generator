import React, { useEffect, useState } from "react";

const ChuckQuote = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      return data;
    };

    fetchJoke().then((data) => {
      setJoke(data.value);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-1">
        <blockquote className="border-l-2 border-slate-300 pl-4">
          {joke}
        </blockquote>
        <cite className="self-end">- Chuck Norris</cite>
      </div>
    </>
  );
};

export default ChuckQuote;
