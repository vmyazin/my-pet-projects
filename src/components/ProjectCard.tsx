// src/components/ProjectCard.tsx
'use client';

import React, { useState, useEffect } from "react";
import { Card, CardBody, Link as NextUILink } from "@nextui-org/react";
import router from "next/router";

interface Collaborator {
  name: string;
  webLink: string;
  avatar: string;
}

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  logoUrl: string;
  collaborators?: Collaborator[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name, description, url, logoUrl, collaborators = []
}) => {
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

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (url.startsWith('http')) {
      window.location.href = url;
    } else {
      router.push(url);
    }
  };

  return (
    <Card
      isPressable
      onClick={handleCardClick}
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
            // placeholder img
            <img
              src="/logos/placeholder-logo.svg"
              alt={`${name} logo`}
              className="w-10 h-10 mr-3 rounded-full object-cover flex-shrink-0"
            />

          )}
          <h3 className="text-lg font-semibold text-primary-400 leading-tight">{name}</h3>
        </div>
        <p className="mt-2 text-gray-400">{description}</p>
        {collaborators.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-400">Team mate:&nbsp;
              <span className="flex-inline flex-wrap mt-1">
                {collaborators.map((collaborator, index) => (
                  <NextUILink
                    key={index}
                    href={collaborator.webLink}
                    className="mr-2 mb-1 text-sm text-gray-300 hover:text-primary-200"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {collaborator.name}
                  </NextUILink>
                ))}
              </span>
            </p>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default ProjectCard;