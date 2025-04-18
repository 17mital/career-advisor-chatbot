import React from 'react';
import './careerRightPanel.css';

const mockCareerInsights = [
  {
    title: "Data Scientist",
    salary: "₹10-25 LPA",
    skills: "Python, ML, Statistics",
  },
  {
    title: "UI/UX Designer",
    salary: "₹6-15 LPA",
    skills: "Figma, Design Thinking, HTML/CSS",
  },
  {
    title: "Cybersecurity Analyst",
    salary: "₹8-20 LPA",
    skills: "Networking, Threat Analysis, Python",
  },
];

const mockTestimonials = [
  {
    name: "Riya Mehta",
    quote: "Career Advisor helped me choose the right path after 12th!",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Arjun Patel",
    quote: "Thanks to this chatbot, I cracked NEET with confidence.",
    img: "https://i.pravatar.cc/100?img=52",
  },
];

const CareerRightPanel = () => {
  return (
    <div className="right-panel">
      <h2>📊 Career Insights</h2>
      {mockCareerInsights.map((career, idx) => (
        <div className="career-card" key={idx}>
          <h3>{career.title}</h3>
          <p><strong>Avg Salary:</strong> {career.salary}</p>
          <p><strong>Skills:</strong> {career.skills}</p>
        </div>
      ))}

      <h2>🌟 Success Stories</h2>
      {mockTestimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <img src={t.img} alt={t.name} />
          <div>
            <p>"{t.quote}"</p>
            <small>- {t.name}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerRightPanel;
