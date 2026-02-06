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
      name: "White Noise App",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=react%20components%20library&image_size=square",
      description: "一款功能丰富的白噪音播放 App，支持多种播放模式和控制方式，适合睡眠、专注、冥想等场景。",
      link: "https://github.com/fengjutian/white_noise"
    },
    {
      id: 3,
      name: "jiufenglanting-business",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tailwind%20css%20template&image_size=square",
      description: "基于Next.js开发的商业地图管理系统，提供商业数据的可视化展示、导入导出、增删改查等功能。",
      link: "https://github.com/fengjutian/jiufenglanting-business"
    },
    {
      id: 4,
      name: "Breakwind",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "Deta Breakwind 是一款 AI 笔记本，它能将你的所有文件和网页直接带入你的思考流程中。",
      link: "https://github.com/fengjutian/Breakwind"
    },
    {
      id: 5,
      name: "AI Voice News",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "一个基于AI的新闻聚合器，能够根据用户的兴趣和偏好，提供个性化的新闻内容。",
      link: "https://github.com/fengjutian/ai-voice-news"
    },
    {
      id: 6,
      name: "fengjutian 技术周刊",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "fengjutian技术周刊是一个专注于前端技术与开源生态的综合性技术平台，致力于为开发者提供最新的技术资讯、开源趋势分析和优质的学习资源。通过精心设计的用户界面和流畅的阅读体验，帮助开发者紧跟技术发展潮流。",
      link: "https://github.com/fengjutian/top-project-trend"
    },
    {
      id: 7,
      name: "blades-to-one",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "一个基于ReAct框架的智能体系统，使用TypeScript开发，支持多种工具集成和LLM调用。",
      link: "https://github.com/fengjutian/blades-to-one"
    },
    {
      id: 8,
      name: "You-re_toxic.",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "关系风险评估小程序",
      link: "https://github.com/fengjutian/You-re_toxic."
    },
    {
      id: 9,
      name: "intime_client",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "一个基于 Flutter 和 Riverpod 的生产级底部标签页应用示例。",
      link: "https://github.com/fengjutian/intime_client"
    },
    {
      id: 10,
      name: "spec-engine",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "基于 YAML 规范的页面引擎，用于快速生成管理后台页面。",
      link: "https://github.com/fengjutian/spec-engine"
    },
    {
      id: 11,
      name: "吃什么",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "一款智能选择餐厅的微信小程序，通过摇一摇功能帮你决定今天吃什么！",
      link: "https://github.com/fengjutian/yao_yi_yao"
    },
    {
      id: 12,
      name: "CodeRAG",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "CodeRAG: AI驱动的代码检索与助手",
      link: "https://github.com/fengjutian/code-RAG"
    },
    {
      id: 13,
      name: "Trae Agent",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "Trae Agent 是一个基于 LLM 的通用软件工程任务智能体。它提供了一个强大的 CLI 接口，能够理解自然语言指令，并使用各种工具和 LLM 提供商执行复杂的软件工程工作流。",
      link: "https://github.com/fengjutian/trae-agent-code"
    },
    {
      id: 14,
      name: "八字专业分析系统",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "一个基于 Node.js + TypeScript 后端和 Vue3 + TypeScript 前端的专业八字分析系统。",
      link: "https://github.com/fengjutian/bazi-professional"
    },
    {
      id: 15,
      name: "vue-analyze-cli",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "Vue 3 AST 分析 CLI 工具，用于分析 Vue 项目中的组件结构并生成可视化报告。",
      link: "https://github.com/fengjutian/vue-analyze-cli"
    },
    {
      id: 16,
      name: "books-RAG",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "books-RAG 是一个基于 FastAPI 的 PDF 文档检索增强生成 (Retrieval-Augmented Generation, RAG) 系统。该系统允许用户上传 PDF 文档，自动提取文本内容并构建向量索引，然后通过自然语言查询获取相关文档内容的精确答案。",
      link: "https://github.com/fengjutian/books-RAG"
    },
    {
      id: 17,
      name: "LLMGate — 企业令牌网关",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "一个基于 FastAPI 的统一令牌网关，用于在企业环境下进行 API Key 校验、请求代理与用量统计。项目采用 Pydantic v2 与 pydantic-settings 管理配置，使用 SQLAlchemy 进行数据库访问，可在开发环境默认使用 SQLite，生产建议使用 PostgreSQL 与 Redis。",
      link: "https://github.com/fengjutian/LLMGate"
    },
    {
      id: 18,
      name: "VSCode 代码质量分析器",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "一个 Visual Studio Code 扩展，用于分析代码质量并提供关于潜在问题和改进建议的详细报告。",
      link: "https://github.com/fengjutian/code-quality"
    },
    {
      id: 19,
      name: "wx-ai-assistant",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "wx-ai-assistant 是一款基于 Electron 和 React 开发的智能助手桌面应用，集成了网页浏览和 AI 聊天功能，为用户提供一站式的信息获取和智能交互体验。",
      link: "https://github.com/fengjutian/wx-ai-assistant"
    },
    {
      id: 20,
      name: "ai-schema-render",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=node.js%20api%20server&image_size=square",
      description: "ai-schema-render 是一个基于 React 开发的智能助手桌面应用，用于渲染 AI 模型的 JSON _schema 文档。",
      link: "https://github.com/fengjutian/ai-schema-render"
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
