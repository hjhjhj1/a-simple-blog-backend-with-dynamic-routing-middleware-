# 动态路由 + 中间件的博客后台

这是一个使用 Next.js 14 和 Tailwind CSS 开发的博客后台管理系统。

## 功能特性

### 登录页（/login）
- 输入任意用户名即可登录
- 使用 localStorage 和 cookie 存储登录状态

### 后台首页（/admin）
- 检查登录态，未登录用户会自动跳转到 /login
- 显示“发布文章”和“文章列表”按钮
- 显示当前登录用户的用户名
- 支持登出功能

### 发布文章（/admin/post）
- 包含标题和内容的表单
- 支持发布文章到本地存储

### 文章列表（/admin/list）
- 显示所有已发布的文章
- 支持删除文章功能
- 文章按创建时间倒序排列

### 路由守卫
- 刷新页面登录状态不丢失
- 使用 Next.js 中间件实现路由守卫
- 未登录用户无法访问后台页面

## 技术栈

- **Next.js 14**:  React 框架，用于构建服务器端渲染和静态站点
- **Tailwind CSS**:  实用优先的 CSS 框架，用于快速构建 UI
- **TypeScript**:  类型安全的 JavaScript 超集
- **localStorage**:  客户端存储，用于保存登录状态和文章数据
- **Cookie**:  用于中间件验证登录状态

## 项目结构

```
.
├── src/
│   ├── app/
│   │   ├── login/
│   │   │   └── page.tsx          # 登录页
│   │   ├── admin/
│   │   │   ├── page.tsx          # 后台首页
│   │   │   ├── post/
│   │   │   │   └── page.tsx      # 发布文章页
│   │   │   └── list/
│   │   │       └── page.tsx      # 文章列表页
│   │   ├── layout.tsx            # 根布局
│   │   ├── page.tsx              # 首页
│   │   ├── globals.css           # 全局样式
│   │   └── middleware.ts         # 中间件
│   └── ...
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .eslintrc.json
└── .gitignore
```

## 安装和运行

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3001 即可查看项目。

### 构建生产版本

```bash
npm run build
npm start
```

## 功能实现说明

### 登录状态管理

- 使用 `localStorage` 存储登录用户名，确保页面刷新后登录状态不丢失
- 使用 `cookie` 存储登录状态，用于 Next.js 中间件验证
- 登录和登出功能同时更新 `localStorage` 和 `cookie`

### 路由守卫

- 使用 Next.js 中间件（`middleware.ts`）实现路由守卫
- 对 `/admin/*` 和 `/login` 路由进行验证
- 未登录用户访问后台页面会被重定向到 `/login`
- 已登录用户访问 `/login` 会被重定向到 `/admin`

### 文章管理

- 文章数据存储在 `localStorage` 中
- 发布文章时生成唯一的 ID（使用时间戳）
- 文章列表按创建时间倒序排列
- 支持删除文章功能

## 浏览器兼容性

项目使用了现代浏览器的 API（如 `localStorage` 和 `cookie`），建议使用最新版本的 Chrome、Firefox、Safari 或 Edge 浏览器。

## 许可证

MIT
