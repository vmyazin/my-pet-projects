// src/app/page.js
import projectsData from '../data/projects.json';
import ProjectCard from "../components/ProjectCard";
import { Button } from "@nextui-org/react";

export default function Home() {
  const { projects } = projectsData;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className='flex w-full justify-space-between'> 
          <div className='flex flex-col flex-grow'>
            <h1 className="text-4xl font-bold mb-2 text-gray-100">Vasily Simon</h1>
            <h2 className="text-2xl mb-2 text-gray-400">Indie Hacker</h2>
            <p className="mb-8 text-gray-200">Welcome to my project directory. Here are some of my pet projects:</p>
          </div>
          <Button href="mailto:productizement@gmail.com" className="bg-lime-500 hover:bg-lime-600 text-black font-bold rounded-md">
            Contact Me
          </Button>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto text-center">
          © 2024 Vasily Simon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}