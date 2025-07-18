import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <div class="add-button hidden md:block">
        <button
          onClick={()=> Navigate("/navigate")}
          class="bg-white text-indigo-700 px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold"
        >
          
        </button>
      </div>
    </div>
  );
};

export default Button;
