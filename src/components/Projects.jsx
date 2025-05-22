import React, { useState } from 'react';

const projects = [
  {
    title: "Smart3Dx Feature Development – Hexagon",
    shortDesc: "Enterprise-level enhancements for 3D piping design tools.",
    fullDesc:
      "Worked as a Software Developer at Hexagon to improve Smart3Dx's RoutePipe, Duct, and Spool commands using .NET (C#), C++, and VB.NET. Developed key features including automated spool generation, multi-split commands, and performance improvements. Received multiple Spot Awards for critical issue resolution.",
    techStack: ["C#", "C++", ".NET Framework", "VB.NET", "Git", "Telerik", "Coverity"],
    github: "",
    demo: ""
  },
  {
    title: "Course Resource Library 2.0",
    shortDesc: "Admin dashboard for managing student course access and certification.",
    fullDesc:
      "A MERN stack web app for course administration. Admins can upload video content, add quizzes, issue certificates, and track student progress. Students can log in, access materials, complete quizzes, and download certificates. Features email integration and MongoDB data storage.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourname/course-resource-library",
    demo: ""
  },
  {
    title: "Airplane Ticket Booking Platform",
    shortDesc: "Flight search, booking, and admin management system.",
    fullDesc:
      "Built a responsive MERN stack application for booking flights with features including user login, flight search/filtering, booking management, and admin control over flight inventory. Implemented secure JWT-based auth and MongoDB schema design.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "Postman"],
    github: "https://github.com/yourname/airplane-booking",
    demo: ""
  },
  {
    title: "Eventify – No Code/Low Code App",
    shortDesc: "Mobile app for managing and discovering community events.",
    fullDesc:
      "Developed a mobile event platform using FlutterFlow. Users can create, explore, and register for community events. Firebase is integrated for authentication and backend data storage. Optimized for real-time updates and responsive design.",
    techStack: ["FlutterFlow", "Firebase", "Low Code", "Mobile App"],
    github: "",
    demo: ""
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-rose-800 mb-12">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm">{project.shortDesc}</p>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white max-w-lg w-full rounded-lg p-6 shadow-lg relative animate-fadeIn">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold text-rose-800 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-700 mb-4 text-justify">{selectedProject.fullDesc}</p>

              <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    className="text-blue-600 font-medium underline"
                    target="_blank" rel="noreferrer"
                  >
                    View GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    className="text-green-600 font-medium underline"
                    target="_blank" rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Optional: fade-in animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
