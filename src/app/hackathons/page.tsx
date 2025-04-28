"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Image } from "next/image";

interface Hackathon {
  title: string;
  description: string;
  folder: string;      // sub-folder inside /public/images
  images: string[];    // jpg (or other) filenames in that folder
}

const hackathons: Hackathon[] = [
  {
    title: "iQuHACK",
    description: "MIT Hackathon (Feb 31st - Mar 2nd, 2024)",
    folder: "iQuHACK",
    images: [
        "IMG_0131.jpg",
        "IMG_5271.JPG",
        "IMG_0149.jpg",
        "IMG_5262.JPG",
        "IMG_0374.jpg",
        "IMG_5261.JPG",
        "IMG_5260.JPG",
        "IMG_5272.JPG",
        "IMG_5280.JPG",
        "IMG_Cityline.JPG",
    ],            
  },
  {
    title: "YQuantum",
    description: "Yale Hackathon (Apr 10th - 12th, 2024)",
    folder: "YQuantum",
    images: [
      "Allparticipants.PNG",
      "AtWork.JPG",
      "GroupTable.jpeg",
      "IMG_4342.jpg",
      "IMG_4349.jpg",
      "IMG_2128.jpg",
      "IMG_4304.jpg",
      "IMG_4371.jpg",
      "IMG_4390.jpg"
    ],
  },
  // add more hackathons here…
];

export default function HackathonsPage() {
  return (
    <div className="min-h-screen pt-28 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* page header */}
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent">
          Hackathons
        </h1>

        {/* one section per hackathon */}
        {hackathons.map((hack) => {
          const items = hack.images.map((img, idx) => {
            const src = `/images/${hack.folder}/${img}`;

            return (
            
              <Card
                key={idx}
                index={idx}
                layout
                card={{
                  src,
                  category: hack.title,
                  title: `${hack.title} – ${idx + 1}`,
                  content: (
                    <img
                      src={src}
                      alt={`${hack.title} photo ${idx + 1}`}
                      height="500"
                      width="500"
                      className="h-auto w-full mx-auto object-contain"
                    />
                  ),
                }}
              />
            );
          });

          return (
            <section key={hack.title} className="flex flex-col items-center space-y-6">
              {/* section header */}
              <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-br from-slate-100 to-slate-600 bg-clip-text text-transparent">
                {hack.title}
              </h2>
                <p className="text-base md:text-lg text-neutral-200">{hack.description}</p>
              </div>

              {/* carousel */}
              <Carousel items={items} />
            </section>
          );
        })}
      </div>
    </div>
  );
}