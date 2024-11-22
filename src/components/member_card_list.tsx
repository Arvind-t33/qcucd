"use client";
import React from "react";
import { CardMember } from "./card_member";

interface Member {
  image: string;
  name: string;
  description: string;
  email: string;
}

const members: Member[] = [
  {
    image: "/images/arv.jpeg",
    name: "John Doe",
    description: "A passionate developer.",
    email: "hello@example.com",
  },
  {
    image: "/images/arv.jpeg",
    name: "Jane Smith",
    description: "A creative designer.",
    email: "hello@example.com",
  },
  {
    image: "/images/arv.jpeg",
    name: "Alice Johnson",
    description: "A skilled project manager.",
    email: "hello@example.com",
  },
  {
    image: "/images/arv.jpeg",
    name: "Alice Johnson",
    description: "A skilled project manager.",
    email: "hello@example.com",
  },
  {
    image: "/images/arv.jpeg",
    name: "Alice Johnson",
    description: "A skilled project manager.",
    email: "hello@example.com",
  },
];

export function MemberCardList() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {members.map((member, index) => (
        <CardMember
          key={index}
          image={member.image}
          name={member.name}
          description={member.description}
          email={member.email}
        />
      ))}
    </div>
  );
}