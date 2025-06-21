import React from "react";

interface QuoteCardProps {
  quote: string;
  author: string;
}

// Quote Card Component (reusable)
const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-md w-64 min-w-[16rem] mx-2">
      <p className="italic font-sans-body text-gray-700 text-base mb-2">
        "{quote}"
      </p>
      <p className="text-right font-sans-body font-medium text-gray-500 text-sm">
        - {author}
      </p>
    </div>
  );
};

// About Us and Quotes Section Component
const quotes = [
  {
    quote: "Every great design begins with an even better story.",
    author: "Unknown",
  },
  {
    quote: "The details are not the details. They make the design.",
    author: "Charles Eames",
  },
  {
    quote: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  { quote: "Design is thinking made visual.", author: "Saul Bass" },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    quote: "Good design is obvious. Great design is transparent.",
    author: "Joe Sparano",
  },
  {
    quote: "Styles come and go. Good design is a language, not a style.",
    author: "Massimo Vignelli",
  },
];

const AboutUsAndQuotes: React.FC = () => {
  return (
    <section className="bg-stone-50 bg-opacity-90 rounded-2xl shadow-xl p-8 md:p-12 my-12 backdrop-blur-sm">
      <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-stone-800 mb-4 text-center">
        Who We Are
      </h2>
      <div className="flex flex-col items-center mb-8">
        <span className="inline-block w-16 h-1 bg-green-800 rounded-full mb-4"></span>
        <p className="text-lg font-sans-body text-gray-700 max-w-2xl text-center mb-2">
          We’re a creative team passionate about turning dreams into
          unforgettable events.
        </p>
        <p className="text-base font-sans-body text-gray-500 max-w-xl text-center italic">
          Every celebration is a story—let’s make yours extraordinary.
        </p>
      </div>
      <div className="mb-12"></div>
      <div className="border-t-2 border-stone-300 pt-8 mt-8">
        <h3 className="text-2xl font-serif-display font-semibold text-green-800 mb-6 text-center">
          Words We Live By
        </h3>
        <div className="flex flex-row gap-4 overflow-x-auto pb-2 justify-start items-stretch">
          {quotes.map((q, idx) => (
            <QuoteCard key={idx} quote={q.quote} author={q.author} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsAndQuotes;
