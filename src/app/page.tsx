"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // 搜索状态
  const [searchTerm, setSearchTerm] = useState("");
  
  // 项目数据数组
  const projects = [
    {
      id: 1,
      name: "catshell",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=next.js%20project%20logo&image_size=square",
      description: "一个用Rust编写的简单而功能丰富的Shell命令实现，支持多种常用Unix/Linux风格命令，带有emoji增强的用户体验。",
      link: "https://github.com/fengjutian/catshell"
    },
    {
      id: 2,
      name: "React 组件库",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=react%20components%20library&image_size=square",
      description: "一套完整的 React 组件库，包含各种常用 UI 组件。",
      link: "https://react.dev"
    },
    {
      id: 3,
      name: "Tailwind CSS 模板",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tailwind%20css%20template&image_size=square",
      description: "使用 Tailwind CSS 构建的响应式网站模板。",
      link: "https://tailwindcss.com"
    },
    {
      id: 4,
      name: "Node.js API",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "基于 Node.js 构建的 RESTful API 服务。",
      link: "https://nodejs.org"
    }
  ];

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
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-6">
          项目展示
        </h1>
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
