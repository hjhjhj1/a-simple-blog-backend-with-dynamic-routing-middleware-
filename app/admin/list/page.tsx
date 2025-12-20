'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Post {
  id: string
  title: string
  content: string
  createdAt: string
}

export default function ListPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const router = useRouter()

  useEffect(() => {
    // 从 localStorage 加载文章
    const storedPosts = localStorage.getItem('posts')
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts))
    }
  }, [])

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这篇文章吗？')) {
      const updatedPosts = posts.filter(post => post.id !== id)
      setPosts(updatedPosts)
      localStorage.setItem('posts', JSON.stringify(updatedPosts))
    }
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
              <button
                onClick={() => router.push('/admin')}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                返回首页
              </button>
              <button
                onClick={() => router.push('/admin/post')}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                发布文章
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">文章列表</h2>
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">暂无文章，点击"发布文章"开始创作</p>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-3 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
                      >
                        删除
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{post.createdAt}</p>
                    <p className="text-gray-700 line-clamp-2">{post.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}