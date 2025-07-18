import React from "react";
import { useState } from "react";

const LearningUseState = () => {
  let [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter++);
  }

  function decrease() {
    while(counter >=0){
        setCounter(counter--);
    }
  }

  return (
    <div>
      <h1>Learning useState</h1>

      <button class="inline-block px-7 py-1.5 overflow-hidden text-sm font-semibold transition-transform rounded-full group text text-green-700/70 bg-green-300/30 hover:bg-green-500/70 hover:text-white">
        Count {counter} 
      </button>
      <button
        onClick={increase}
        class="inline-block px-7 py-1.5 overflow-hidden text-sm font-semibold transition-transform rounded-full group text text-green-700/70 bg-green-300/30 hover:bg-green-500/70 hover:text-white"
      >
        +
      </button>

      <button
        onClick={decrease}
        class="inline-block px-7 py-1.5 overflow-hidden text-sm font-semibold transition-transform rounded-full group text text-green-700/70 bg-green-300/30 hover:bg-green-500/70 hover:text-white"
      >
        -
      </button>
    </div>
  );
};

export default LearningUseState;
