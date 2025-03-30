import React from "react";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.jpeg";
import feature3 from "../../assets/feature3.jpeg";

const FeaturesSection = () => {
  const features = [
    { image: feature1, title: "Track Expenses", description: "Monitor your spending in real-time." },
    { image: feature2, title: "Budget Planning", description: "Set and manage budgets effectively." },
    { image: feature3, title: "Financial Insights", description: "Get AI-powered insights on your spending." }
  ];

  return (
    <section id="features">
      <h2>Key Features</h2>
      {features.map((feature, index) => (
        <div key={index}>
          <img src={feature.image} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;

