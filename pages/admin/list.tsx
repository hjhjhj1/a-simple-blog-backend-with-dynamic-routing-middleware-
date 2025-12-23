import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface Post {
  id: string
  title: string
  content: string
  author: string
  createdAt: Date
}

const ListPage = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const router = useRouter()

  useEffect(() => {
    // 从localStorage获取文章列表
    const storedPosts = localStorage.getItem('posts')
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts))
    }
  }, [])

  const handleEdit = (id: string) => {
    // 跳转到编辑页面（这里只是示例，实际项目中可以实现编辑功能）
    alert(`编辑文章ID: ${id}`)
  }

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
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-800">文章列表</h1>
            <button
              onClick={() => router.push('/admin')}
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              返回首页
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">暂无文章，快去发布吧！</p>
            <button
              onClick={() => router.push('/admin/post')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              发布第一篇文章
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate max-w-[80%]">
                    {post.title}
                  </h2>
                  <span className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleString('zh-CN', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.content}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">作者：{post.author}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(post.id)}
                      className="text-sm text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      编辑
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-sm text-red-500 hover:text-red-700 transition-colors"
                    >
                      删除
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default ListPage
