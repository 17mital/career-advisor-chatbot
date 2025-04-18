import React from 'react';
import './Courses.css';
 
const courseList = [
  {
    title: 'Apna College',
    description: 'DSA, Web Development, and more by Aman Dhattarwal. Great for beginners and college students.',
    link: 'https://www.apnacollege.in/',
  },
  {
    title: 'Physics Wallah',
    description: 'Affordable and high-quality classes for JEE, NEET, and foundation courses.',
    link: 'https://www.pw.live/',
  },
  {
    title: 'Udemy',
    description: 'Wide variety of affordable courses in tech, business, design, and personal development.',
    link: 'https://www.udemy.com/',
  },
  {
    title: 'Coursera',
    description: 'University-level learning with certificates. Offered by top institutions globally.',
    link: 'https://www.coursera.org/',
  },
  {
    title: 'Coding Ninjas',
    description: 'Master C++, Java, Python, DSA, and more with structured learning paths.',
    link: 'https://www.codingninjas.com/',
  },
  {
    title: 'GeeksforGeeks',
    description: 'Prepare for placements with coding tutorials, quizzes, and live classes.',
    link: 'https://www.geeksforgeeks.org/',
  },
];
 
const Courses = () => {
  return (
<div className="container">
<h1 className="heading">📚 Career Booster Courses</h1>
<div className="card-container">
        {courseList.map((course, index) => (
<a
            key={index}
            href={course.link}
            className="card"
            target="_blank"
            rel="noopener noreferrer"
>
<h2 className="card-title">{course.title}</h2>
<p className="card-description">{course.description}</p>
</a>
        ))}
</div>
</div>
  );
};
 
export default Courses;