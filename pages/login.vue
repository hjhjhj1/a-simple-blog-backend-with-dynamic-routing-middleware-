<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">登录</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2" for="username">
            用户名
          </label>
          <input
            id="username"
            v-model="username"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请输入用户名"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          登录
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const username = ref('')
const user = useState('user', () => null)

const handleLogin = () => {
  if (username.value.trim()) {
    user.value = username.value
    // 保存到 localStorage 实现持久化
    if (process.client) {
      localStorage.setItem('blog_user', username.value)
    }
    navigateTo('/admin')
  }
}
</script>