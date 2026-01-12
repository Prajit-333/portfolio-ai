import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description: "A minimalist e-commerce platform built with Next.js and Stripe. Features a custom cart implementation and real-time inventory management.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    image: "https://placehold.co/600x400/2D6A4F/FFFFFF/png?text=Project+One",
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description: "Real-time collaborative task management dashboard. Uses WebSockets for instant updates and drag-and-drop interface.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://placehold.co/600x400/171717/FFFFFF/png?text=Project+Two",
    github: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    description: "AI-powered content generation tool. Integrates with OpenAI API to help writers brainstorm and draft articles faster.",
    tags: ["OpenAI API", "Python", "FastAPI", "React"],
    image: "https://placehold.co/600x400/e5e5e5/171717/png?text=Project+Three",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-zinc-800"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {/* Using a simple div as placeholder if Image fails or for initial load */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-gray-500 hover:text-accent transition-colors"
                      aria-label="View Source"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="text-gray-500 hover:text-accent transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
