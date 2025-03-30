import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.jpeg";
import feature3 from "../assets/feature3.jpeg";

const FeatureSection = () => {
  return (
    <section id="features">
      <h2>Key Features</h2>
      <div className="feature">
        <img src={feature1} alt="Feature 1" />
        <h3>Expense Tracking</h3>
        <p>Monitor your spending and stay on top of your budget.</p>
      </div>
      <div className="feature">
        <img src={feature2} alt="Feature 2" />
        <h3>Smart Budgeting</h3>
        <p>Automatically allocate funds to your needs.</p>
      </div>
      <div className="feature">
        <img src={feature3} alt="Feature 3" />
        <h3>Reports & Insights</h3>
        <p>Visualize your financial health with detailed reports.</p>
      </div>
    </section>
  );
};

export default FeatureSection;

