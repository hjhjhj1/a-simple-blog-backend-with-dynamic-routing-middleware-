export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user', () => null)
  
  // 检查登录状态
  if (!user.value) {
    // 未登录，重定向到登录页
    return navigateTo('/login')
  }
})