export default defineNuxtPlugin(() => {
  // 初始化用户登录状态
  const user = useState('user', () => null)
  const posts = useState('posts', () => [])
  
  if (process.client) {
    // 从 localStorage 恢复用户信息
    const savedUser = localStorage.getItem('blog_user')
    if (savedUser) {
      user.value = savedUser
    }
    
    // 从 localStorage 恢复文章数据
    const savedPosts = localStorage.getItem('blog_posts')
    if (savedPosts) {
      posts.value = JSON.parse(savedPosts)
    }
  }
})