"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    "Full Stack Developer",
    "AI/ML Developer",
    "Cloud Architect",
    "UI/UX Designer"
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2D6A4F] opacity-20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2D6A4F] opacity-10 rounded-full blur-[128px] animate-pulse delay-1000"></div>
        
        {/* Moving Light Beam Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_60deg,rgba(45,106,79,0.2)_90deg,transparent_120deg)] animate-[spin_8s_linear_infinite] opacity-50"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        <h2 className="text-xl md:text-2xl font-medium text-accent mb-4 animate-in fade-in slide-in-from-bottom-2 duration-1000">
          Hi, I'm Prajit
        </h2>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Crafting Digital
          <br />
          <span className="text-accent">Experiences</span>
        </h1>

        <div className="h-8 mb-8">
          <p className="text-xl md:text-2xl text-gray-400 font-mono">
            &gt; {text}
            <span className="animate-pulse">_</span>
          </p>
        </div>

        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          I build accessible, pixel-perfect, and performant web applications.
          Focused on creating intuitive interfaces that solve complex problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-200 bg-zinc-900 border border-gray-800 rounded-full hover:bg-zinc-800 transition-all duration-200"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-200 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-200 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-gray-400 hover:text-accent transition-colors duration-200 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
