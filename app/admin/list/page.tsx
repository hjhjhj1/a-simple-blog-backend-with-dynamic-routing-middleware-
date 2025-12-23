'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ListPage() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState('');
  const router = useRouter();

  useEffect(() => {
    // 从localStorage获取登录态
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }

    // 从localStorage获取文章列表
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(savedPosts);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    // 同时删除cookie
    document.cookie = 'user=; path=/; max-age=0';
    router.push('/login');
  };

  const handleDelete = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">文章列表</h2>
            <Link
              href="/admin/post"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              发布文章
            </Link>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">暂无文章</p>
              <Link
                href="/admin/post"
                className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                发布第一篇文章
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        删除
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">作者: {post.author}</p>
                  <p className="text-gray-500 text-sm mb-4">
                    {new Date(post.createdAt).toLocaleString('zh-CN')}
                  </p>
                  <p className="text-gray-700 line-clamp-3">{post.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}