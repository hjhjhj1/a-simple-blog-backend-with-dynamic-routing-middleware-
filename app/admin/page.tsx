'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../components/ProtectedRoute';

export default function AdminHome() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('username') || '';
    setUsername(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    router.push('/login');
  };

  const handleCreatePost = () => {
    router.push('/admin/post');
  };

  const handleViewPosts = () => {
    router.push('/admin/list');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">博客后台管理</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">欢迎, {username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300"
              >
                登出
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-center h-24 w-24 mx-auto bg-blue-100 rounded-full mb-4">
                <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">发布文章</h2>
              <button
                onClick={handleCreatePost}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
              >
                写文章
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-center h-24 w-24 mx-auto bg-green-100 rounded-full mb-4">
                <svg className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">文章列表</h2>
              <button
                onClick={handleViewPosts}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300"
              >
                查看文章
              </button>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}