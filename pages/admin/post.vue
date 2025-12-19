<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <header class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">发布文章</h1>
        <div class="flex space-x-4">
          <NuxtLink
            to="/admin"
            class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            返回首页
          </NuxtLink>
          <NuxtLink
            to="/admin/list"
            class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            文章列表
          </NuxtLink>
        </div>
      </header>
      <div class="bg-white rounded-lg shadow-md p-8">
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2" for="title">
              文章标题
            </label>
            <input
              id="title"
              v-model="title"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入文章标题"
            />
          </div>
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2" for="content">
              文章内容
            </label>
            <textarea
              id="content"
              v-model="content"
              required
              rows="8"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入文章内容"
            ></textarea>
          </div>
          <div class="flex space-x-4">
            <button
              type="submit"
              class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              发布文章
            </button>
            <button
              type="button"
              @click="resetForm"
              class="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              重置
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const title = ref('')
const content = ref('')
const posts = useState('posts', () => [])

const handleSubmit = () => {
  if (title.value.trim() && content.value.trim()) {
    const newPost = {
      id: Date.now(),
      title: title.value.trim(),
      content: content.value.trim(),
      createdAt: new Date().toISOString()
    }
    
    posts.value.push(newPost)
    
    // 保存到 localStorage
    if (process.client) {
      localStorage.setItem('blog_posts', JSON.stringify(posts.value))
    }
    
    alert('文章发布成功!')
    resetForm()
    navigateTo('/admin/list')
  }
}

const resetForm = () => {
  title.value = ''
  content.value = ''
}
</script>