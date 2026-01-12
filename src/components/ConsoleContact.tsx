"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ConsoleContact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    if (email.includes("@") && email.includes(".")) {
      setEmailStatus("STATUS: Address confirmed [200 OK]");
    } else {
      setEmailStatus("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ----------------------------------------------------------------------
    // EmailJS Configuration
    // Credentials are now loaded from local environment variables (.env.local)
    // ----------------------------------------------------------------------
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn("EmailJS environment variables are missing.");
      setSubmitMessage("ERROR: System config error (Missing Credentials)");
      setIsSubmitting(false);
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            const sessionId = Math.floor(100000 + Math.random() * 900000);
            setSubmitMessage(`TRANSMISSION SUCCESSFUL. Session ID: [${sessionId}]`);
            setIsSubmitting(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setEmailStatus("");
            
            // Clear success message after 5 seconds
            setTimeout(() => setSubmitMessage(""), 5000);
          },
          (error) => {
            console.error("FAILED...", error.text);
            setSubmitMessage(`ERROR: ${error.text || "Connection refused"}`);
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-[#0a0a0a] border border-[#333] rounded-lg shadow-2xl overflow-hidden font-mono text-white p-6 md:p-10 relative">
      {/* CRT Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02),rgba(255,255,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>
      
      <div className="relative z-20">
        <div className="mb-8 border-b border-[#333] pb-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-wider">
            SYSTEM LOG: Initiate New Session<span className={`${cursorVisible ? "opacity-100" : "opacity-0"}`}>_</span>
          </h2>
          <p className="text-xs text-gray-400 mt-2">v2.4.1-stable // secure_connection_established</p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="group">
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1 opacity-70">
              // Identify User
            </label>
            <div className="flex items-center bg-black/50 border border-[#333] focus-within:border-white px-3 py-2 transition-colors">
              <span className="text-white mr-2 shrink-0">[USER@CONTACT] &gt; set_user_id</span>
              <input
                type="text"
                id="name"
                name="name" // Required for EmailJS
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600"
                placeholder="_"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="group">
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1 opacity-70">
              // Return Path
            </label>
            <div className="flex items-center bg-black/50 border border-[#333] focus-within:border-white px-3 py-2 transition-colors">
              <span className="text-white mr-2 shrink-0">[USER@CONTACT] &gt; define_return_addr</span>
              <input
                type="email"
                id="email"
                name="email" // Required for EmailJS
                required
                value={formData.email}
                onChange={handleEmailChange}
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600"
                placeholder="_"
                autoComplete="off"
              />
            </div>
            {emailStatus && (
              <div className="text-xs text-white mt-1 ml-2 animate-pulse">
                {emailStatus}
              </div>
            )}
          </div>

          {/* Subject Dropdown */}
          <div className="group">
            <label htmlFor="subject" className="block text-sm text-gray-400 mb-1 opacity-70">
              // Classification
            </label>
            <div className="flex items-center bg-black/50 border border-[#333] focus-within:border-white px-3 py-2 transition-colors">
              <span className="text-white mr-2 shrink-0">ERROR CODE [Select]:</span>
              <select
                id="subject"
                name="subject" // Required for EmailJS
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-black text-white border-none outline-none w-full cursor-pointer appearance-none"
              >
                <option value="" disabled>-- SELECT_CODE --</option>
                <option value="General Inquiry">401: Unauthorized Inquiry (General Question)</option>
                <option value="Project Proposal">503: Service Request (Project Proposal)</option>
                <option value="Collaboration">202: Collaboration Proposal (Partnership)</option>
                <option value="Just Saying Hi">101: Connection Reset (Just Saying Hi)</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div className="group">
            <label htmlFor="message" className="block text-sm text-gray-400 mb-1 opacity-70">
              // Payload Data
            </label>
            <div className="bg-black/50 border border-[#333] focus-within:border-white px-3 py-2 transition-colors">
              <div className="text-white mb-1">[SYSTEM] &gt; payload_data_injection</div>
              <textarea
                id="message"
                name="message" // Required for EmailJS
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600 resize-none"
                placeholder="..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-zinc-900 hover:bg-zinc-800 border border-white text-white font-bold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
          >
            {isSubmitting ? (
              <span className="animate-pulse">PROCESSING...</span>
            ) : (
              <>
                Execute Command <span className="ml-2 group-hover:translate-x-1 transition-transform">$ &gt;&gt;</span>
              </>
            )}
          </button>

          {/* Success Message */}
          {submitMessage && (
            <div className={`mt-4 p-3 border border-white bg-zinc-900 text-white text-center animate-bounce ${submitMessage.startsWith("ERROR") ? "border-red-500 text-red-400" : ""}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
