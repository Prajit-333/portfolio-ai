import Skills from "@/components/Skills";

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About Me</h1>
        
        <div className="prose dark:prose-invert max-w-none mb-16">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I am a passionate Full Stack Developer with a keen eye for design and a drive for creating seamless digital experiences. With a background in both engineering and design, I bridge the gap between technical functionality and aesthetic appeal.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            My journey began when I built my first website at the age of 15. Since then, I've worked with startups, agencies, and large corporations, helping them build scalable web applications and intuitive user interfaces.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            When I'm not coding, you can find me exploring new coffee shops, reading about the latest tech trends, or contributing to open-source projects. I believe in continuous learning and always strive to stay ahead of the curve.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative">
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-2"></div>
              <h3 className="text-xl font-bold">Senior Frontend Engineer</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">Tech Corp • 2021 - Present</p>
              <p className="text-gray-600 dark:text-gray-400">
                Leading the frontend team in rebuilding the core product dashboard using Next.js and React. Improved performance by 40% and established a new design system.
              </p>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative">
              <div className="absolute w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full -left-[7px] top-2"></div>
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">StartUp Inc • 2019 - 2021</p>
              <p className="text-gray-600 dark:text-gray-400">
                Developed and maintained multiple client-facing web applications. Collaborated closely with designers to implement pixel-perfect UIs.
              </p>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </main>
  );
}
