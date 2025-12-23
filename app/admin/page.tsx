'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminHome() {
  const [user, setUser] = useState('');
  const router = useRouter();

  useEffect(() => {
    // 从localStorage获取登录态
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    // 同时删除cookie
    document.cookie = 'user=; path=/; max-age=0';
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">博客后台</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">欢迎, {user}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              登出
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">后台首页</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/admin/post"
              className="bg-blue-500 text-white p-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-4"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-xl">发布文章</span>
            </Link>
            <Link
              href="/admin/list"
              className="bg-green-500 text-white p-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-4"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-xl">文章列表</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}