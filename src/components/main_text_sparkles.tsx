import { SparklesCore } from './ui/sparkles';
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TextGenerateEffectDemo} from "./components/tutorials/text-generate_tutorial";

export function MainTextSparkles() {
  const description = `Welcome to the Quantum Computing Club at Davis. We explore the fascinating world of quantum computing, from theoretical foundations to practical applications. Join us to learn, collaborate, and innovate in this cutting-edge field.`;

  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-100xl text-7xl font-bold text-center text-white relative z-20" style={{ fontFamily: '"geist-mono", monospace' }}>
        Quantum Computing at Davis
      </h1>
      <div className="relative w-full h-full">
        {/* Gradients */}
        <div className="absolute inset-x-0 top-0 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-0 top-0 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-0 top-0 mx-auto bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(800px_200px_at_top,black,transparent_100%)]"
          particleColor="#FFFFFF"
        />

        {/* Static Description */}
        <div className="relative z-40 mt-32 text-center text-white text-2xl leading-snug tracking-wide max-w-xl mx-auto">
          {description}
        </div>
      </div>
    </div>
  );
}