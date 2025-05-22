import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50"
    >
      <div className="max-w-4xl mx-auto text-justify">
        <h2 className="text-4xl font-bold mb-10 text-center text-rose-800">About Me</h2>

        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          I'm <strong>Yeswin Chintapalli</strong>, a dedicated software developer and graduate student currently pursuing my Master’s in Computer Science at <strong>Purdue University Fort Wayne</strong>. My academic foundation is paired with over two years of professional experience in software engineering, where I’ve developed scalable backend systems and cutting-edge features for enterprise-level applications.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          Previously, I worked at <strong>Hexagon Capability Center India</strong> as a Software Developer, contributing to 3D modeling and route automation tools. My role involved backend logic, database integration, and legacy system modernization. I received <strong>multiple Spot Awards</strong> for rapidly resolving critical production issues under tight deadlines.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          I’m proficient in languages such as <strong>C++, Java, C#, JavaScript, and Python</strong>, and have strong experience in frameworks like <strong>.NET</strong> and the <strong>MERN stack</strong>. I'm well-versed in testing tools like <strong>Telerik, Citrus, and JUnit</strong>, and experienced in working with <strong>Git, TFS, and Firebase</strong>.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          At Purdue, I also serve as a <strong>Grading Assistant</strong> for the CS11200 course, where I evaluate student assignments and support the learning process by providing detailed, constructive feedback.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-5">
          Outside of work, I’m passionate about traveling and nature. I enjoy exploring offbeat places, hiking scenic trails, and capturing beautiful landscapes. Whether it's mountain treks or city walks, travel inspires me and sparks creativity.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed">
          My current interests lie in <strong>backend development, intelligent systems, and full-stack engineering</strong>. I'm also actively learning <strong>Data Science</strong> and expect to gain strong proficiency in the next few months.
        </p>
      </div>
    </section>
  );
};

export default About;
