import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            I'm currently available for freelance projects and open to full-time opportunities.
            If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
            <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300">
              <Mail className="text-accent" size={20} />
              <a href="mailto:hello@example.com" className="hover:text-accent transition-colors">
                hello@example.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300">
              <MapPin className="text-accent" size={20} />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300">
              <Phone className="text-accent" size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          
          <a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
