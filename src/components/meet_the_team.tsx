"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { LampContainer } from "@/components/ui/lamp";

// Team Data
const team = [
  { name: "Jeanette Simo", role: "President", image: "/images/team/president.png" },
  { name: "Rishi Seri", role: "Vice President", image: "/images/team/vice_president.png" },
  { name: "Justin Oliver", role: "Project Manager", image: "/images/team/project_manager.png" },
  { name: "Arvind Tawker", role: "Software Team Lead", image: "/images/team/software_team_lead.png" },
  { name: "Liam Hofman", role: "Workshop Director", image: "/images/team/workshop_director.png" },
];

export function MeetTheTeamWithLamp() {
  return (
    <LampContainer>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-4xl font-bold mb-10 text-white"
      >
        Meet the Team
      </motion.h2>

      <div className="relative z-50 flex flex-row justify-center items-center gap-8">
        {team.map((member) => (
          <div key={member.name} className="relative group">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full shadow-lg object-cover cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
              data-tooltip-id={`tooltip-${member.name}`}
            />
            <Tooltip
              id={`tooltip-${member.name}`}
              content={
                <div className="text-center">
                  <p className="font-bold">{member.name}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
              }
              className="bg-gray-800 text-white p-2 rounded shadow-md"
            />
          </div>
        ))}
      </div>
    </LampContainer>
  );
}
