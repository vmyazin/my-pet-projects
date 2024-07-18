// src/components/ProjectCard.tsx
import { Card, CardBody, Link } from "@nextui-org/react";
import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, url }) => {
  return (
    <Card>
      <CardBody>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg font-semibold">{name}</h3>
        </Link>
        <p className="mt-2">{description}</p>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;