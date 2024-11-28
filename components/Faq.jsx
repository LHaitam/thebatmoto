import React from "react";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 mb-12 bg-[#ffffff]">
      <div>
        <h2
          className="text-6xl font-semibold text-[#f9cb0c] text-center mx-10 my-10  "style={{
            fontFamily: "Bangers",
          }}
        >
          FAQ 
        </h2>
        <FaqAccordion />
      </div>
    </div>
  );
};

export default Faq;
