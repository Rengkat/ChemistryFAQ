import faqs from "./Data";

import QuestionOutput from "./QuestionOutput";

function FAQ() {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-[#94B1F9]">
      <div className=" md:flex flex-row  max-w-xsm md:w-1/2 p-3 rounded-lg bg-[#DBE3F6] shadow-lg h-auto border-2 border-gray-500">
        <section className="flex-1 md:flex-5 flex items-center p-5">
          <h1 className="font-bold text-2xl w-full text-center">
            FQA on the Basics of <br /> Chemistry
          </h1>
        </section>
        <section className="flex-1">
          {faqs.map((fqa) => {
            return <QuestionOutput {...fqa} key={fqa.id} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default FAQ;
