// src/app/page.js
'use client';

import ProjectCard from "../components/ProjectCard";
import { Button } from "@nextui-org/react";

const projects = [
  { name: "TaskMaster", description: "A productivity app for busy professionals", url: "https://taskmaster.example.com" },
  { name: "FitTrack", description: "Fitness tracking app with AI-powered insights", url: "https://fittrack.example.com" },
  { name: "CookBook", description: "Recipe sharing platform for food enthusiasts", url: "https://cookbook.example.com" },
  { name: "CodeBuddy", description: "AI-powered coding assistant for developers", url: "https://codebuddy.example.com" },
  { name: "EcoShop", description: "Marketplace for eco-friendly products", url: "https://ecoshop.example.com" },
  { name: "MoodTunes", description: "Music recommendation based on your mood", url: "https://moodtunes.example.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Vasily Simon</h1>
          <h2 className="text-2xl mb-4">Indie Hacker</h2>
          <p className="mb-8">Welcome to my project directory. Here are some of my pet projects:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <Button color="primary" href="mailto:your@email.com" className="mt-4">
            Contact Me
          </Button>
        </div>
      </main>
      <footer className="bg-gray-600 py-4">
        <div className="container mx-auto text-center">
          © 2024 Vasily Simon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}