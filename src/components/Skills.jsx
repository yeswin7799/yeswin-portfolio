import React from 'react';

const skills = [
  {
    category: "Programming",
    items: [
      { label: "C#", icon: "💻" },
      { label: "Java", icon: "☕" },
      { label: "Python", icon: "🐍" },
      { label: "C", icon: "🔧" },
      { label: "C++", icon: "🔩" },
      { label: "VB6", icon: "📘" },
      { label: "JavaScript", icon: "🟨" },
    ]
  },
  {
    category: "Frameworks",
    items: [
      { label: ".NET Framework", icon: "🧩" },
      { label: "React.js", icon: "⚛️" },
      { label: "Node.js", icon: "🌿" },
      { label: "Express", icon: "🚀" },
    ]
  },
    {
    category: "Tools & Platforms",
    items: [
      { label: "Git", icon: "🔗" },
      { label: "Postman", icon: "📮" },
      { label: "Visual Studio", icon: "🖥️" },
      { label: "SolidWorks", icon: "📐" },
    ]
  },
    {
    category: "Key Skills",
    items: [
      { label: "Algorithms & Data Structures", icon: "📊" },
      { label: "Agile", icon: "⚙️" },
    ]
  },
  {
    category: "Databases",
    items: [
      { label: "MongoDB", icon: "🍃" },
      { label: "MySQL", icon: "🐬" }
    ]
  },

  {
    category: "Testing",
    items: [
      { label: "UnitTest (Telerik)", icon: "🧰" },
      { label: "JUnit", icon: "🧪" }
    ]
  },

  {
    category: "Currently Learning",
    items: [
      { label: "Data Science", icon: "📘" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-rose-800 mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-rose-50 px-4 py-2 text-sm text-gray-800 font-medium rounded-full shadow-sm flex items-center gap-1 hover:bg-rose-100 transition"
                  >
                    <span>{skill.icon}</span> {skill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
