<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <header class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">博客后台管理</h1>
        <div class="flex items-center space-x-4">
          <span class="text-gray-600">欢迎, {{ user }}</span>
          <button
            @click="handleLogout"
            class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            登出
          </button>
        </div>
      </header>
      <div class="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">欢迎使用博客后台</h2>
        <p class="text-gray-600 mb-8">您可以在这里管理您的博客文章</p>
        <NuxtLink
          to="/admin/post"
          class="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors font-medium"
        >
          发布文章
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const user = useState('user', () => null)

const handleLogout = () => {
  user.value = null
  if (process.client) {
    localStorage.removeItem('blog_user')
    localStorage.removeItem('blog_posts')
  }
  navigateTo('/login')
}
</script>