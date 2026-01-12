const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  Backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  Tools: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-bold text-accent border-b border-gray-100 dark:border-gray-800 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-gray-50 dark:bg-zinc-900 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
