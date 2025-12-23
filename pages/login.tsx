import { useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie } from 'cookies-next'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      // 模拟登录，设置cookie
      setCookie('user', username, { 
        maxAge: 60 * 60 * 24, // 24小时
        path: '/',
        sameSite: 'strict',
      })
      // 保存到localStorage以支持页面刷新后状态不丢失
      localStorage.setItem('user', username)
      // 跳转到后台首页
      router.push('/admin')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">登录</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              用户名
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            登录
          </button>
        </form>
      </div>
    </div>
  )
}
