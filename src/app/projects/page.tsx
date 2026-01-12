import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">My Work</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A collection of projects that showcase my passion for building clean, performant, and user-friendly web applications.
          </p>
        </div>
        
        {/* Reusing the Projects component but we could pass a 'limit' prop or 'showAll' prop if we wanted to customize it further. 
            For now, the Projects component displays all projects. */}
        <Projects />
      </div>
    </main>
  );
}
