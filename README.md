# 动态路由 + 中间件的简易博客后台

这是一个使用Next.js开发的简易博客后台，包含动态路由和中间件功能。

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- cookies-next

## 功能

### 登录页（/login）
- 输入任意用户名即登录，存useState('user')
- 登录状态使用localStorage和cookie进行管理
- 页面刷新后登录状态不会丢失

### 后台首页（/admin）
- 中间件middleware/auth.ts检查登录态，未登录跳转到 /login
- 显示“发布文章”按钮
- 显示“文章列表”按钮
- 显示当前登录用户名
- 提供登出功能

### 发布文章（/admin/post）
- 表单：标题、内容（textarea）
- 发布成功后跳转到文章列表页面

### 文章列表（/admin/list）
- 显示所有已发布的文章
- 支持查看文章详情
- 支持编辑文章
- 支持删除文章

## 安装和运行

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 访问页面

打开浏览器访问 http://localhost:3000

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

## 中间件功能

中间件middleware/auth.ts实现了以下功能：

1. 检查登录状态，从cookie中获取用户信息
2. 如果用户未登录且访问的是/admin路径下的页面，跳转到登录页
3. 如果用户已登录且访问登录页，跳转到后台首页

## 登录状态管理

登录状态使用localStorage和cookie进行管理：

1. 登录时，设置cookie和localStorage
2. 页面刷新时，从localStorage中恢复登录状态
3. 登出时，清除cookie和localStorage

## 文章管理

文章使用localStorage进行存储：

1. 发布文章时，将文章信息保存到localStorage
2. 文章列表页面，从localStorage中获取文章信息并显示
3. 编辑文章时，修改localStorage中的文章信息
4. 删除文章时，从localStorage中删除文章信息

## 注意事项

- 本项目只是一个简易的博客后台，没有连接实际的数据库
- 文章信息仅存储在浏览器的localStorage中，关闭浏览器后数据会丢失
- 登录状态使用cookie和localStorage进行管理，仅在当前浏览器中有效
- 中间件仅在服务器端运行，用于检查登录状态
- 前端路由守卫使用useEffect和localStorage实现，用于在客户端检查登录状态
