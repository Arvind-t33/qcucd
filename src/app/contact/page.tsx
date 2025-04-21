export default function Contact() {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Contact Us</h1>
        <div className="max-w-2xl w-full bg-black/30 backdrop-blur-md p-8 rounded-lg border border-white/10">
          <div className="mb-8 text-white/80">
            <p className="mb-4">Have questions about the Quantum Computing Club at UC Davis? Reach out to us!</p>
            <p>Email: <a href="mailto:quantum@ucdavis.edu" className="text-blue-400 hover:underline">quantum@ucdavis.edu</a></p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Name</label>
              <input type="text" className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Email</label>
              <input type="email" className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white"></textarea>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Send Message</button>
          </div>
        </div>
      </div>
    );
  }