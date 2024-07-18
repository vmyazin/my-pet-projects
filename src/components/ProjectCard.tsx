// src/components/ProjectCard.tsx
'use client';

import { Card, CardBody, Link } from "@nextui-org/react";
import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, url }) => {
  return (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="contents hover:bg-gray-750"
    >
      <Card 
        className="bg-gray-900 transition-colors duration-300 hover:bg-gray-750 p-3 rounded-md"
      >
        <CardBody>
          <h3 className="text-lg font-semibold text-lime-500">{name}</h3>
          <p className="mt-2 text-gray-400">{description}</p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;