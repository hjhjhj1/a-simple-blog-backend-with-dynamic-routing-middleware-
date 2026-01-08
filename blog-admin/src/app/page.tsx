'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // 检查用户是否已登录
    const user = localStorage.getItem('user');
    if (user) {
      // 已登录，重定向到后台
      router.push('/admin');
    } else {
      // 未登录，重定向到登录页
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="text-gray-600">正在跳转...</p>
      </div>
    </div>
  );
}
