# 项目展示平台

这是一个基于 [Next.js](https://nextjs.org) 构建的项目展示平台，使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 初始化。

## 项目功能

- 📱 **响应式布局**：在不同屏幕尺寸下自动调整卡片布局
  - 小屏幕：1 列
  - 中等屏幕：2 列
  - 大屏幕：3 列
  - 超大屏幕：4 列
- 🔍 **搜索功能**：支持按项目名称和描述搜索
- 🎨 **现代设计**：使用 Tailwind CSS 构建，支持深色模式
- 🖼️ **图片展示**：每个项目都有对应的图片预览
- 🔗 **项目链接**：点击卡片中的链接可以跳转到项目详情页

## 技术栈

- **前端框架**：Next.js 14+
- **UI 框架**：Tailwind CSS
- **状态管理**：React useState
- **图片优化**：Next.js Image 组件

## 快速开始

### 安装依赖

```bash
pnpm install
# 或
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
pnpm dev
# 或
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
pnpm build
# 或
npm run build
# 或
yarn build
```

### 预览生产版本

```bash
pnpm start
# 或
npm start
# 或
yarn start
```

## 项目结构

```
├── public/             # 静态资源文件
│   ├── next.svg        # Next.js 图标
│   ├── vercel.svg      # Vercel 图标
│   └── ...             # 其他静态文件
├── src/
│   ├── app/            # App Router 目录
│   │   ├── page.tsx    # 主页面
│   │   ├── layout.tsx  # 布局文件
│   │   └── globals.css # 全局样式
│   └── ...             # 其他源代码
├── next.config.js      # Next.js 配置
├── package.json        # 项目依赖
└── README.md           # 项目说明
```

## 自定义配置

### 添加新项目

在 `src/app/page.tsx` 文件中，找到 `projects` 数组，添加新的项目对象：

```typescript
{
  id: 5, // 唯一 ID
  name: "项目名称", // 项目名称
  image: "https://example.com/image.jpg", // 项目图片 URL
  description: "项目描述", // 项目简介
  link: "https://example.com" // 项目链接
}
```

### 配置图片域名

如果需要添加新的图片域名，在 `next.config.js` 文件中更新 `images.remotePatterns` 配置：

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'example.com',
      port: '',
      pathname: '/**',
    },
    // 其他图片域名配置
  ],
},
```

## 部署

### Vercel 部署

1. 访问 [Vercel](https://vercel.com/new)
2. 连接你的 GitHub 仓库
3. 点击 "Import" 按钮
4. 按照提示完成部署

### 其他部署方式

参考 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多部署选项。

## 学习资源

- [Next.js 文档](https://nextjs.org/docs) - 学习 Next.js 特性和 API
- [Tailwind CSS 文档](https://tailwindcss.com/docs) - 学习 Tailwind CSS 使用方法
- [React 文档](https://react.dev/docs) - 学习 React 核心概念

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 许可证

MIT License
