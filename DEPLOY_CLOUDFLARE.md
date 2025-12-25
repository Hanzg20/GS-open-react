# 部署 GS-open-react 到 Cloudflare Pages

本文档详细说明如何将 GS-open-react（Next.js 着陆页模板）部署到 Cloudflare Pages。

## 项目信息

- **项目名称**: GS-open-react (Open Pro Next.js Template)
- **GitHub 仓库**: https://github.com/Hanzg20/GS-open-react.git
- **技术栈**: Next.js 15 + React 19 + TypeScript + Tailwind CSS v4
- **项目类型**: 着陆页模板（Landing Page Template）
- **原始作者**: Cruip.com

## ⚠️ 重要提示

这是一个 **Next.js** 项目，不是 Vite 项目。Cloudflare Pages 对 Next.js 的支持有一些限制：
- 支持静态导出（Static Export）
- 不支持某些服务端功能（如 ISR, middleware 等）
- API Routes 需要转换为 Cloudflare Workers

## 部署步骤

### 步骤 1: 准备项目

项目已准备好：
- ✅ 使用 npm 安装依赖（已创建 package-lock.json）
- ✅ 构建测试成功
- ⚠️ 存在安全漏洞（Next.js 15.1.6）- 建议后续升级

### 步骤 2: 创建 Cloudflare Pages 项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 导航到 **Pages**
3. 点击 **Create a project**
4. 选择 **Connect to Git**

### 步骤 3: 连接 GitHub 仓库

1. 选择 **GitHub** 作为 Git 提供商
2. 授权 Cloudflare 访问您的 GitHub 账户
3. 选择仓库: **Hanzg20/GS-open-react**
4. 点击 **Begin setup**

### 步骤 4: 配置构建设置

#### 基础配置
- **Project name**: `gs-open-react` (或您喜欢的名称)
- **Production branch**: `main` (或您的主分支名称)

#### 构建设置（Next.js 静态导出）
- **Framework preset**: 选择 `Next.js (Static Export)`
- **Build command**: `npx @cloudflare/next-on-pages@latest`
  或者使用标准构建：`npm install && npm run build`
- **Build output directory**: `.vercel/output/static` 或 `out`
- **Root directory**: `/` (留空)

#### 环境变量
- `NODE_VERSION`: `20`
- `NPM_VERSION`: `10`

### 步骤 5: 配置 Next.js 静态导出

为了确保项目能在 Cloudflare Pages 上正常运行，需要配置静态导出：

#### 修改 next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 添加这行，启用静态导出
  images: {
    unoptimized: true  // Cloudflare Pages 不支持 Next.js 图片优化
  }
}

module.exports = nextConfig
```

### 步骤 6: 处理 API Routes

当前项目包含 `/api/hello` API route。Cloudflare Pages 不直接支持 Next.js API Routes，有两个选择：

1. **移除 API Routes**（如果不需要）
2. **使用 Cloudflare Workers**（如果需要后端功能）

### 步骤 7: 部署项目

1. 点击 **Save and Deploy**
2. 等待首次部署完成（通常需要 3-5 分钟）
3. 部署成功后，您会获得一个默认域名：`gs-open-react.pages.dev`

## 项目结构分析

```
GS-open-react/
├── app/                # Next.js App Router
│   ├── page.tsx       # 主页
│   ├── signin/        # 登录页
│   ├── signup/        # 注册页
│   └── reset-password/# 重置密码页
├── components/        # React 组件
├── public/           # 静态资源
├── utils/            # 工具函数
└── package.json      # 依赖配置
```

### 页面路由
- `/` - 主页（23.5 kB）
- `/signin` - 登录页
- `/signup` - 注册页
- `/reset-password` - 重置密码页
- `/api/hello` - API 路由（需要特殊处理）

## 本地开发

### 安装和运行

```bash
# 克隆仓库
git clone https://github.com/Hanzg20/GS-open-react.git
cd GS-open-react

# 安装依赖（推荐使用 pnpm）
pnpm install
# 或使用 npm
npm install

# 启动开发服务器（带 Turbopack）
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器（本地测试）
npm run start
```

### 开发服务器

- 本地地址: http://localhost:3000
- API 路由: http://localhost:3000/api/hello

## 性能优化建议

### 1. 升级 Next.js 版本
当前使用 15.1.6 版本存在安全漏洞，建议升级：
```bash
npm update next@latest
```

### 2. 优化构建大小
- First Load JS: 134 kB（主页）
- 建议实施代码分割和动态导入

### 3. Tailwind CSS v4 优化
项目使用了最新的 Tailwind CSS v4，确保正确配置以获得最佳性能。

## 故障排除

### 常见问题

#### 1. 构建失败
- 确保使用 Node.js 20
- 检查是否正确配置了静态导出
- 确认所有依赖都已安装

#### 2. API Routes 不工作
- Cloudflare Pages 不支持 Next.js API Routes
- 需要使用 Cloudflare Workers 或移除 API 功能

#### 3. 动态路由问题
- 确保所有动态路由都已预渲染
- 使用 `generateStaticParams` 生成静态路径

#### 4. 图片不显示
- 设置 `images.unoptimized: true`
- 使用静态图片而非 Next.js Image 优化

## 替代部署方案

如果 Cloudflare Pages 限制太多，可以考虑：

1. **Vercel**（Next.js 官方推荐）
   - 完全支持所有 Next.js 功能
   - 自动优化和边缘网络

2. **Netlify**
   - 支持 Next.js 静态导出
   - 简单的部署流程

3. **传统静态托管**
   - 导出为纯静态网站
   - 使用任何静态托管服务

## 安全注意事项

⚠️ **安全漏洞警告**
- Next.js 15.1.6 存在已知安全漏洞
- 详情: https://nextjs.org/blog/CVE-2025-66478
- **强烈建议**: 在生产环境部署前升级 Next.js

## 项目来源

这是一个基于 Cruip.com 的免费开源模板：
- 原始项目: https://github.com/cruip/open-react-template
- 演示: https://open.cruip.com/
- 设计文件: https://bit.ly/401KSUS

## 联系和支持

- **GitHub Issues**: https://github.com/Hanzg20/GS-open-react/issues
- **Next.js 文档**: https://nextjs.org/docs
- **Cloudflare Pages 文档**: https://developers.cloudflare.com/pages/
- **原始模板支持**: https://twitter.com/Cruip_com

## 更新日志

- **2024-12-25**: 初始部署配置
- 添加 npm 支持（创建 package-lock.json）
- 创建部署文档
- 识别安全漏洞并提供升级建议

---

最后更新时间: 2024-12-25