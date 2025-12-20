# a-simple-blog-backend-with-dynamic-routing-middleware-
开发“动态路由 + 中间件的简易博客后台”
技术
nextjs
模拟登录状态用 useState 管理（不写后端）
样式 Tailwind CSS
功能
登录页（/login）：
输入任意用户名即登录，存 useState('user')
后台首页（/admin）：
中间件 middleware/auth.ts 检查登录态，未登录跳转到 /login
显示“发布文章”按钮
发布文章（/admin/post）：
表单：标题、内容（textarea）
文章列表（/admin/list）：
前端路由守卫：刷新页面登录状态不丢失（localStorage 辅助）
登录后可登出
