import coverImage from "../assets/budget-cover.png";

const IntroSection = () => {
  return (
    <section className="intro">
      <img src={coverImage} alt="BudgetMate Cover" className="cover-image" />
      <h2>BudgetMate</h2>
      <p>Your smart budget planner</p>
      <a href="https://budget-mate-mvp.vercel.app/" className="button">Try BudgetMate</a>
    </section>
  );
};

export default IntroSection;

