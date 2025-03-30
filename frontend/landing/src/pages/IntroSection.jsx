import React from "react";
import coverImage from "../../assets/budget-cover.png";

const IntroSection = () => {
  return (
    <section id="intro">
      <img src={coverImage} alt="BudgetMate Cover" />
      <h1>BudgetMate</h1>
      <p>Your smart budgeting companion.</p>
      <a href="https://budget-mate-mvp.vercel.app/" target="_blank">
        <button>Start Using BudgetMate</button>
      </a>
    </section>
  );
};

export default IntroSection;

