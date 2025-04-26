export default function Workshops() {
  return (
    <div className="min-h-screen pt-28 flex flex-col items-center">
      <div className="min-h-screen flex flex-col items-center px-4 py-16 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Workshops
        </h1>
        
        <div className="max-w-3xl text-white/80 text-lg px-4 sm:px-6 md:px-0 w-full">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">Upcoming Workshops</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">Introduction to Quantum Computing - March 15, 2025</li>
              <li className="mb-2">Programming with Qiskit - April 2, 2025</li>
              <li className="mb-2">Quantum Algorithms Deep Dive - April 20, 2025</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-white">Past Workshops</h2>
            <p>Workshop archives coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}