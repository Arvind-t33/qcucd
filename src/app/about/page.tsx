export default function About() {
  return (
    <div className="min-h-screen pt-28 flex flex-col items-center">
      <div className="min-h-screen flex flex-col items-center px-4 py-16 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          About Quantum Computing at Davis
        </h1>
        
        <div className="max-w-3xl text-white/80 text-lg px-4 sm:px-6 md:px-0 w-full">
          <p className="mb-4">
            The Quantum Computing Club at UC Davis was founded to explore the fascinating intersection of quantum mechanics and computer science.
          </p>
          <p className="mb-4">
            Our mission is to educate students about quantum computing principles, foster research and collaboration, and prepare members for careers in this emerging field.
          </p>
          <p className="mb-4">
            We organize workshops, invite guest speakers, and create hands-on projects that help members develop practical skills in quantum programming.
          </p>
        </div>
      </div>
    </div>
  );
}