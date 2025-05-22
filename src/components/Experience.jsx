import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Professional Experience</h2>

        {/* Hexagon Experience */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-rose-800">Hexagon Capability Center India</h3>
              <p className="italic text-gray-700">Software Developer</p>
            </div>
            <div className="text-right text-sm text-gray-600 mt-2 md:mt-0">
              <p>Hyderabad, India</p>
              <p className="italic">April 2022 – July 2024</p>
            </div>
          </div>

          <ul className="mt-6 space-y-4 list-disc list-inside text-gray-800 leading-relaxed">
            <li>
              Led Smart3Dx modernization by updating Route Duct and Pipe features using <strong>.NET (C#)</strong>, <strong>C++</strong>, and <strong>VB.NET</strong>, applying OOP principles to build scalable, maintainable software.
            </li>
            <li>
              Developed and implemented StraightFeature commands, spool generation, and pipe/duct splitting in <strong>Smart3Dx using C#</strong>, improving route design efficiency by <strong>15%</strong> and reducing design time by <strong>30%</strong>, saving up to <strong>$500/month</strong>.
            </li>
            <li>
              Improved code quality using <strong>Coverity</strong> static analysis, resolving over <strong>95%</strong> of reference leaks and stabilizing the Smart3Dx application.
            </li>
            <li>
              Automated RouteDuct workflows using <strong>.NET Framework</strong> and implemented <strong>unit testing with Telerik JustMock</strong>, improving regression test efficiency by <strong>25%</strong>.
            </li>
            <li>
              Identified and resolved over <strong>30 bugs</strong> across the project, reducing production issues by <strong>30%</strong> and enhancing reliability.
            </li>
            <li>
              Created the Set Allowable Specification command to consolidate user specs, reducing user time by <strong>20%</strong> and increasing workflow speed.
            </li>
            <li>
              Managed source control using <strong>Git and TFS</strong>, reducing merge conflicts by <strong>30%</strong> and improving team productivity.
            </li>
            <li>
              Participated in <strong>Scrum</strong> ceremonies including sprint planning, retrospectives, and user story grooming, improving sprint efficiency by <strong>25%</strong> and reducing sprint cycle time by <strong>20%</strong>.
            </li>
          </ul>
        </div>

        {/* Grader Role */}
        <div className="bg-white shadow-md rounded-xl p-6 mt-10">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-rose-800">Purdue University Fort Wayne</h3>
              <p className="italic text-gray-700">Grading Assistant – CS11200: Computer Science for Everyone</p>
            </div>
            <div className="text-right text-sm text-gray-600 mt-2 md:mt-0">
              <p>Fort Wayne, IN</p>
              <p className="italic">Spring 2025 – Present</p>
            </div>
          </div>

          <ul className="mt-6 space-y-4 list-disc list-inside text-gray-800 leading-relaxed">
            <li>
              Assisted in grading assignments and Python-based projects for introductory CS students.
            </li>
            <li>
              Delivered timely feedback to reinforce programming logic and syntax understanding.
            </li>
            <li>
              Coordinated with course instructor to clarify rubric interpretation and maintain grading consistency.
            </li>
            <li>
              Gained insight into pedagogy and academic evaluation in computer science education.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
