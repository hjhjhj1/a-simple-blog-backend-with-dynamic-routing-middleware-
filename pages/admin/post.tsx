import { useState } from 'react'
import { useRouter } from 'next/router'

interface Post {
  id: string
  title: string
  content: string
  author: string
  createdAt: Date
}

const PostPage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      // 模拟保存文章到localStorage
      const posts: Post[] = JSON.parse(localStorage.getItem('posts') || '[]')
      const newPost: Post = {
        id: Date.now().toString(),
        title,
        content,
        author: localStorage.getItem('user') || '匿名用户',
        createdAt: new Date(),
      }
      posts.push(newPost)
      localStorage.setItem('posts', JSON.stringify(posts))
      
      // 跳转到文章列表
      router.push('/admin/list')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-800">发布文章</h1>
            <button
              onClick={() => router.push('/admin')}
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              返回首页
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              标题
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入文章标题"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              内容
            </label>
            <textarea
              id="content"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
              placeholder="请输入文章内容"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => router.push('/admin')}
              className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              发布
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default PostPage
