import React from "react";
import faqData from "@/config/faqData";
import LandingContainer from "./landingContainer";
import Sprikle from "../elements/sprikle";

const LandingFAQ = () => {
  return (
    <LandingContainer>
      <section className="bg-white dark:bg-gray-900" id="faqs">
        <div className="py-8 mx-auto max-w-screen-xl sm:py-16">
          <div className="md:w-2/3 lg:w-1/2">
            <Sprikle />
            <h2 className="mb-4 mt-8 text-2xl font-bold uppercase text-gray-700 dark:text-white md:text-2xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-6 dark:border-gray-700 md:grid-cols-2">
            {faqData.map((item, index) => (
              <FaqItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </LandingContainer>
  );
};

export default LandingFAQ;

const FaqItem = ({ question, answer }) => (
  <div className="mb-2">
    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
      <svg
        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </svg>
      {question}
    </h3>
    <p className="text-gray-500 dark:text-gray-400">{answer}</p>
  </div>
);
