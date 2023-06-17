import React, { useEffect, useState } from "react";

const ChuckQuote = ({ joke }) => {
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
