'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [user, setUser] = useState('')
  const router = useRouter()

  useEffect(() => {
    // 从 localStorage 或 cookie 获取用户信息
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const handleLogout = () => {
    // 清除 cookie
    document.cookie = 'user=; path=/; max-age=0'
    // 清除 localStorage
    localStorage.removeItem('user')
    localStorage.removeItem('posts')
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">博客后台管理</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">欢迎, {user}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                登出
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">后台首页</h2>
            <p className="text-gray-600 mb-8">欢迎使用简易博客后台管理系统</p>
            <div className="flex space-x-4">
              <button
                onClick={() => router.push('/admin/post')}
                className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                发布文章
              </button>
              <button
                onClick={() => router.push('/admin/list')}
                className="px-6 py-3 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                文章列表
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}