import React, { useEffect, useState } from "react";
import { GrMoney } from "react-icons/gr";
const financialTips = [
  {
    tip: "Live Below Your Means",
    advice: "Spend less than you earn and avoid unnecessary debt.",
    quote:
      "If you buy things you do not need, soon you will have to sell things you need.",
    author: "Warren Buffett",
  },
  {
    tip: "Pay Yourself First",
    advice: "Save a portion of your income before spending on anything else.",
    quote:
      "Do not save what is left after spending, but spend what is left after saving.",
    author: "Warren Buffett",
  },
  {
    tip: "Invest Early and Consistently",
    advice:
      "Start investing as early as possible to take advantage of compound interest.",
    quote:
      "The best time to plant a tree was 20 years ago. The second-best time is now.",
    author: "Chinese Proverb",
  },
  {
    tip: "Diversify Your Investments",
    advice:
      "Don't put all your money into one asset; diversify to minimize risks.",
    quote:
      "The four most dangerous words in investing are: ‘This time it’s different.’",
    author: "Sir John Templeton",
  },
  {
    tip: "Avoid Bad Debt",
    advice: "Use debt wisely; avoid high-interest loans and credit card debt.",
    quote:
      "Debt is like any other trap, easy enough to get into, but hard enough to get out of.",
    author: "Henry Wheeler Shaw",
  },
  {
    tip: "Build an Emergency Fund",
    advice:
      "Set aside at least 3-6 months of living expenses for unexpected situations.",
    quote:
      "You must gain control over your money, or the lack of it will forever control you.",
    author: "Dave Ramsey",
  },
  {
    tip: "Increase Your Financial Knowledge",
    advice:
      "Read books, attend seminars, and stay updated on financial trends.",
    quote: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    tip: "Set Clear Financial Goals",
    advice: "Have short-term and long-term financial goals to stay focused.",
    quote:
      "A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.",
    author: "Suze Orman",
  },
  {
    tip: "Understand Your Expenses",
    advice: "Track your expenses and identify areas where you can cut costs.",
    quote: "Beware of little expenses. A small leak will sink a great ship.",
    author: "Benjamin Franklin",
  },
  {
    tip: "Take Advantage of Tax Benefits",
    advice:
      "Use tax-saving investments and deductions to minimize tax liability.",
    quote: "It’s not how much money you make, but how much money you keep.",
    author: "Robert Kiyosaki",
  },
];
export const FinancialTips = () => {
  const [showQuote, setShowQuote] = useState(financialTips[0]);

  useEffect(() => {
    setInterval(() => {
      setShowQuote(
        financialTips[Math.floor(Math.random() * financialTips.length)]
      );
    }, 3000);
  }, []);

  const { tips, quote, advice, author } = showQuote;
  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{
        height: "100%",
      }}
    >
      <div className="mb-5">
        <GrMoney className="text-success" style={{ fontSize: "10rem" }} />
        <div>Watch your Money Grow!</div>
      </div>
      <h4>{tips}</h4>
      <div>
        "{quote}" - {author}
      </div>
    </div>
  );
};
