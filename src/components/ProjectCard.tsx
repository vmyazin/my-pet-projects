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
      rel="noopener noreferrer" 
      className="contents"
      >
      <Card 
        isPressable
        className="border-2 border-transparent bg-gray-900 transition-all duration-150 hover:border-primary-800 hover:scale-105 hover:bg-gray-750 p-3"
        classNames={{
          base: "bg-gray-800 hover:bg-gray-750",
        }}
      >
        <CardBody>
          <h3 className="text-lg font-semibold text-primary-400 leading-tight">{name}</h3>
          <p className="mt-2 text-gray-400">{description}</p>
        </CardBody>
      </Card>
    </Link>
  );
};


export default ProjectCard;