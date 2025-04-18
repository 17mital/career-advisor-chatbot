import React from 'react';
import './scholarship.css';
 
const scholarships = [
  {
    title: 'National Scholarship Portal',
    description: 'Government platform offering various scholarships for school & college students.',
    link: 'https://scholarships.gov.in/',
  },
  {
    title: 'Vidyasaarathi',
    description: 'Education financing portal offering scholarships from corporates like TATA, JSW, etc.',
    link: 'https://www.vidyasaarathi.co.in/Vidyasaarathi/index',
  },
  {
    title: 'Buddy4Study',
    description: 'Search and apply to various private and government scholarships in one place.',
    link: 'https://www.buddy4study.com/',
  },
  {
    title: 'Internshala Scholarship',
    description: 'Initiatives like "Girls Scholarship", "Young Achiever Scholarship" for college students.',
    link: 'https://www.internshala.com/scholarships',
  },
  {
    title: 'DNB Foundation',
    description: 'Scholarships for underprivileged students, especially in rural and semi-urban areas.',
    link: 'https://www.dnbfoundation.com/',
  },
];
 
const Scholarships = () => {
  return (
<div className="container">
<h1 className="heading">🎓 Scholarships for Students</h1>
<div className="card-container">
        {scholarships.map((item, index) => (
<a key={index} href={item.link} className="card" target="_blank" rel="noopener noreferrer">
<h2 className="card-title">{item.title}</h2>
<p className="card-description">{item.description}</p>
</a>
        ))}
</div>
</div>
  );
};
 
export default Scholarships;