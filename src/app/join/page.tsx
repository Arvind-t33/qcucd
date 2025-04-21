export default function Join() {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Join the Club</h1>
        <div className="max-w-2xl text-white/80 text-lg">
          <p className="mb-6">
            We welcome all UC Davis students interested in quantum computing, regardless of prior experience.
          </p>
          
          <h2 className="text-2xl font-semibold mb-2 text-white">Membership Benefits</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Access to workshop materials and recordings</li>
            <li className="mb-2">Networking opportunities with industry professionals</li>
            <li className="mb-2">Hands-on experience with quantum computing technologies</li>
            <li className="mb-2">Collaborative research projects</li>
          </ul>
          
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10 mt-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Sign Up Form</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/20 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">UC Davis Email</label>
                <input type="email" className="w-full bg-black/50 border border-white/20 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Major</label>
                <input type="text" className="w-full bg-black/50 border border-white/20 rounded px-3 py-2" />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }