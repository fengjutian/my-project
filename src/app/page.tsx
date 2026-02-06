"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/app/data.schema";

export default function Home() {
  // 搜索状态
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center py-32 px-16 bg-white dark:bg-black">
        <Image
          className="dark:invert mb-16"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="w-full max-w-md mb-8">
          <input
            type="text"
            placeholder="搜索项目..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {projects
            .filter((project) =>
              project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              project.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((project) => (
            <div key={project.id} className="rounded-xl border border-black/[.08] p-4 transition-shadow hover:shadow-lg dark:border-white/[.145]">
              <div className="aspect-video mb-3 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-black dark:text-zinc-50">
                {project.name}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-3">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                查看详情 →
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
