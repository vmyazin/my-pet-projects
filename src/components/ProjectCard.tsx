// src/components/ProjectCard.tsx
'use client';

import { Card, CardBody, Link } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  logoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, url, logoUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = logoUrl;

    const timer = setTimeout(() => {
      if (!imageLoaded) setImageError(true);
    }, 5000); // 5 second timeout

    img.onload = () => {
      setImageLoaded(true);
      clearTimeout(timer);
    };

    img.onerror = () => {
      setImageError(true);
      clearTimeout(timer);
    };

    return () => {
      clearTimeout(timer);
    };
  }, [logoUrl]);

  return (
    <Link
      href={url}
      rel="noopener noreferrer"
      className="contents"
    >
      <Card
        isPressable
        className="border-2 border-transparent bg-gray-900/90 transition-all duration-150 hover:border-primary-800 hover:scale-105 hover:bg-gray-750 p-3"
        classNames={{
          base: "bg-gray-800 hover:bg-gray-750",
        }}
      >
        <CardBody>
          <div className="flex items-center mb-3">
            {!imageError ? (
              <img
                src={logoUrl}
                alt={`${name} logo`}
                className={`w-10 h-10 mr-3 rounded-full object-cover flex-shrink-0 ${!imageLoaded ? 'hidden' : ''}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            ) : null}
            {(!imageLoaded || imageError) && (
              <svg className="w-10 h-10 mr-3 flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#FFFFFF" />
                <path d="M24 12L28.2426 20.7574L37 25L28.2426 29.2426L24 38L19.7574 29.2426L11 25L19.7574 20.7574L24 12Z" fill="#808080" />
              </svg>
            )}
            <h3 className="text-lg font-semibold text-primary-400 leading-tight">{name}</h3>
          </div>
          <p className="mt-2 text-gray-400">{description}</p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;