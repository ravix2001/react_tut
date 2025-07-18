import React from "react";
import { useState } from "react";

const LearningUseState = () => {
  let [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <h1 className="flex justify-center text-3xl m-8">Learning useState</h1>

      <div className="flex items-center justify-center mt-4 p-10">
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <div class="px-6 py-2 mt-6 bg-blue-500 text-white rounded-lg ">
            Counter = {counter}
          </div>

          <div className="flex items-center m-6">
            <button
              onClick={increase}
              className="px-6 py-2 bg-green-500 text-white rounded-lg mx-4"
            >
              +
            </button>

            <button
              onClick={decrease}
              className="px-6 py-2 bg-red-500 text-white rounded-lg mx-4"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningUseState;
