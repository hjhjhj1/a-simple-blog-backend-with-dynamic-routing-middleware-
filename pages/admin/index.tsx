import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCookie, deleteCookie } from 'cookies-next'

interface User {}

const AdminHome = () => {
  const [user, setUser] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // 从localStorage获取用户信息
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const handleLogout = () => {
    // 清除cookie和localStorage
    deleteCookie('user')
    localStorage.removeItem('user')
    // 跳转到登录页
    router.push('/login')
  }

  const handlePublish = () => {
    router.push('/admin/post')
  }

  const handleList = () => {
    router.push('/admin/list')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">博客后台管理</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">欢迎，{user}</span>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700 font-medium transition-colors"
              >
                登出
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">发布文章</h2>
            <p className="text-gray-600 mb-4">创建新的博客文章</p>
            <button
              onClick={handlePublish}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              进入发布页面
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">文章列表</h2>
            <p className="text-gray-600 mb-4">查看和管理所有文章</p>
            <button
              onClick={handleList}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              进入列表页面
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminHome
