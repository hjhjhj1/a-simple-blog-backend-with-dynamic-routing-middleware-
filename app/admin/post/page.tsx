'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user, setUser] = useState('');
  const router = useRouter();

  useEffect(() => {
    // 从localStorage获取登录态
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      // 保存文章到localStorage
      const posts = JSON.parse(localStorage.getItem('posts') || '[]');
      const newPost = {
        id: Date.now(),
        title,
        content,
        author: user,
        createdAt: new Date().toISOString(),
      };
      posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(posts));
      // 跳转到文章列表
      router.push('/admin/list');
    }
  };

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
          <Link href="/admin" className="text-xl font-bold">博客后台</Link>
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
          <h2 className="text-2xl font-bold mb-6">发布文章</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">标题</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="请输入文章标题"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">内容</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-64"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="请输入文章内容"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                发布
              </button>
              <Link
                href="/admin"
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                取消
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}