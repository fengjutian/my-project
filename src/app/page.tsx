"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { projects } from "@/app/data.schema";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950">
      <main className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28 lg:px-16">
        {/* ─── 头部 ─── */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            fengjutian
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
            全栈开发者 · 开源爱好者 · 持续构建中
          </p>
          <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
            Rust · TypeScript · React · Next.js · Flutter
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-zinc-200 dark:bg-zinc-700" />
        </header>

        {/* ─── 搜索 ─── */}
        <div className="mx-auto mb-12 w-full max-w-md">
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="搜索项目名称或描述…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm text-zinc-900 shadow-sm transition-all duration-300 placeholder:text-zinc-400 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/40"
            />
          </div>
        </div>

        {/* ─── 项目网格 ─── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((project, idx) => (
              <article
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                {/* 图片 */}
                <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* 内容 */}
                <div className="flex flex-1 flex-col p-4">
                  <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </h2>
                  <p className="mt-1.5 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>

                  {/* 标签 */}
                  {"tags" in project && Array.isArray(project.tags) && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {(project.tags as string[]).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 链接 */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    查看详情
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* ─── 空状态 ─── */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg
              className="mb-4 h-12 w-12 text-zinc-300 dark:text-zinc-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
              没有找到匹配的项目
            </p>
            <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
              试试其他关键词吧
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
