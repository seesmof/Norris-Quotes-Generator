import React, { useEffect, useState } from "react";

const ChuckQuote = () => {
  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data;
  };

  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke().then((data) => {
      setJoke(data.value);
    });
  }, []);

  console.log(joke);

  return (
    <>
      <div className="fle"></div>
    </>
  );
};

export default ChuckQuote;
