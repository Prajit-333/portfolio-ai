import ConsoleContact from "@/components/ConsoleContact";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Get in Touch</h1>
          <p className="text-xl text-gray-400">
            Have a question or want to work together? Initialize a connection below.
          </p>
        </div>
        
        <ConsoleContact />
        
        {/* Additional Contact Info or Map could go here */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-zinc-900/50 rounded-2xl shadow-sm border border-zinc-800">
          <h3 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">Are you available for freelance work?</h4>
              <p className="text-gray-400">Yes, I am currently accepting new freelance projects. Please reach out to discuss your requirements.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-white">What is your typical turnaround time?</h4>
              <p className="text-gray-400">It depends on the scope of the project. A simple website might take 2-3 weeks, while a complex web app could take 2-3 months.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
