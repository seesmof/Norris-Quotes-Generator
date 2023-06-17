import React, { useEffect, useState } from "react";
import ChuckQuote from "./components/ChuckQuote";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-slate-50 w-full">
        <div className="p-6 flex container mx-auto max-w-4xl flex-col">
          <h1 className="font-medium text-4xl">Hello World</h1>

          <button className="button mt-4">Click Me</button>

          <ChuckQuote />
        </div>
      </div>
    </>
  );
}

export default App;
