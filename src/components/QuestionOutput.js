import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";

function QuestionOutput({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="">
      <section className="flex relative pr-5 shadow-md border-2 border-gray-200 mb-2 rounded-lg">
        <h4 className="text-xl font-semibold   p-3 block rounded-md">
          {question}
        </h4>

        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? (
            <FiMinusCircle className="absolute right-2 lg:bottom-3 text-2xl  " />
          ) : (
            <BsPlusCircle className="absolute right-2 shadow-md text-2xl bottom-8 lg:bottom-3 " />
          )}
        </button>
      </section>
      {showAnswer && <p className="p-2">{answer}</p>}
    </div>
  );
}

export default QuestionOutput;
