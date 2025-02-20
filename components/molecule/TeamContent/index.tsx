"use client";
import React from "react";
import { team } from "@/app/interface/types";
import TeamCard from "../Cards/TeamCards";

const TeamContent = ({ teams }: { teams: team[] }) => {
    if (!teams || teams.length === 0) {
      return <div>No team data available</div>; // Fallback in case no data is available
    }
  
    return (
      <main className="w-full grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        {teams.map((teamMember) => (
          <TeamCard teams={teamMember} key={teamMember.id} /> // Ensure teamMember is passed correctly
        ))}
      </main>
    );
  };
  

export default TeamContent;