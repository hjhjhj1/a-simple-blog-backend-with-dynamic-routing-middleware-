<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <header class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">文章列表</h1>
        <div class="flex space-x-4">
          <NuxtLink
            to="/admin"
            class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            返回首页
          </NuxtLink>
          <NuxtLink
            to="/admin/post"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            发布新文章
          </NuxtLink>
        </div>
      </header>
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">所有文章</h2>
        <div v-if="posts.length === 0" class="text-center py-12 text-gray-500">
          暂无文章，快来发布第一篇吧！
        </div>
        <div v-else class="space-y-4">
          <div
            v-for="post in posts"
            :key="post.id"
            class="border border-gray-200 rounded-md p-4 hover:shadow-sm transition-shadow"
          >
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-semibold text-gray-800">{{ post.title }}</h3>
              <span class="text-sm text-gray-500">{{ formatDate(post.createdAt) }}</span>
            </div>
            <p class="text-gray-600 mb-4 line-clamp-3">{{ post.content }}</p>
            <button
              @click="deletePost(post.id)"
              class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors text-sm"
            >
              删除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const posts = useState('posts', () => [])

const deletePost = (id) => {
  if (confirm('确定要删除这篇文章吗？')) {
    posts.value = posts.value.filter(post => post.id !== id)
    if (process.client) {
      localStorage.setItem('blog_posts', JSON.stringify(posts.value))
    }
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleString('zh-CN')
}
</script>