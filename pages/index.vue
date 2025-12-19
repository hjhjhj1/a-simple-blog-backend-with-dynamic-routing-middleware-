<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">简易博客后台管理系统</h1>
      <p class="text-gray-600 mb-8">欢迎使用基于 Nuxt 3 的博客后台管理系统</p>
      <div class="space-x-4">
        <NuxtLink to="/login" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          登录
        </NuxtLink>
        <NuxtLink to="/admin" class="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          管理后台
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// 首页组件
</script>