# 项目总结

## 项目概述

本项目是一个使用Next.js开发的简易博客后台，包含动态路由和中间件功能。项目实现了登录、发布文章、查看文章列表等功能，并且使用localStorage和cookie进行登录状态管理，确保页面刷新后登录状态不会丢失。

## 功能实现

### 1. 登录页（/login）
- 输入任意用户名即可登录
- 登录状态使用localStorage和cookie进行管理
- 页面刷新后登录状态不会丢失

### 2. 后台首页（/admin）
- 中间件middleware/auth.ts检查登录态，未登录用户访问会跳转到登录页
- 显示“发布文章”按钮，点击后跳转到发布文章页面
- 显示“文章列表”按钮，点击后跳转到文章列表页面
- 显示当前登录用户名
- 提供登出功能，点击后清除登录状态并跳转到登录页

### 3. 发布文章（/admin/post）
- 表单包含标题和内容（textarea）两个输入框
- 发布成功后跳转到文章列表页面
- 文章信息保存到localStorage中

### 4. 文章列表（/admin/list）
- 显示所有已发布的文章
- 支持查看文章详情（点击“阅读全文”按钮）
- 支持编辑文章（点击“编辑”按钮）
- 支持删除文章（点击“删除”按钮）

## 技术实现

### 1. 中间件功能

中间件middleware/auth.ts实现了以下功能：
- 检查登录状态，从cookie中获取用户信息
- 如果用户未登录且访问的是/admin路径下的页面，跳转到登录页
- 如果用户已登录且访问登录页，跳转到后台首页

### 2. 登录状态管理

登录状态使用localStorage和cookie进行管理：
- 登录时，设置cookie和localStorage
- 页面刷新时，从localStorage中恢复登录状态
- 登出时，清除cookie和localStorage

### 3. 文章管理

文章使用localStorage进行存储：
- 发布文章时，将文章信息保存到localStorage
- 文章列表页面，从localStorage中获取文章信息并显示
- 编辑文章时，修改localStorage中的文章信息
- 删除文章时，从localStorage中删除文章信息

## 项目结构

```
.
├── middleware/auth.ts          # 中间件，检查登录状态
├── pages/
│   ├── _app.tsx               # 全局应用组件
│   ├── _document.tsx          # 自定义HTML文档结构
│   ├── index.tsx              # 首页
│   ├── login.tsx              # 登录页面
│   └── admin/
│       ├── index.tsx          # 后台首页
│       ├── post.tsx           # 发布文章页面
│       └── list.tsx           # 文章列表页面
├── styles/globals.css         # 全局样式文件
├── next.config.js             # Next.js配置文件
├── tsconfig.json              # TypeScript配置文件
├── tailwind.config.ts         # Tailwind CSS配置文件
├── postcss.config.js          # PostCSS配置文件
└── package.json               # 项目依赖配置
```

## 运行方式

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 访问页面

打开浏览器访问 http://localhost:3000

## 注意事项

- 本项目只是一个简易的博客后台，没有连接实际的数据库
- 文章信息仅存储在浏览器的localStorage中，关闭浏览器后数据会丢失
- 登录状态使用cookie和localStorage进行管理，仅在当前浏览器中有效
- 中间件仅在服务器端运行，用于检查登录状态
- 前端路由守卫使用useEffect和localStorage实现，用于在客户端检查登录状态

## 项目亮点

1. 使用Next.js实现动态路由和中间件功能
2. 登录状态使用localStorage和cookie进行管理，页面刷新后不会丢失
3. 文章信息使用localStorage进行存储，实现了简单的本地数据管理
4. 使用Tailwind CSS实现了响应式布局，页面在不同设备上都能正常显示
5. 代码结构清晰，易于维护和扩展

## 后续改进

1. 连接实际的数据库，实现文章信息的持久化存储
2. 增加文章分类、标签等功能
3. 增加评论功能
4. 增加图片上传功能
5. 优化页面加载速度
6. 增加用户权限管理功能
