import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">欢迎来到博客后台</h1>
        <p className="text-gray-600 mb-8 text-lg">
          这是一个使用 Next.js + Tailwind CSS 构建的简易博客后台系统
        </p>
        <Link
          href="/login"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
        >
          登录后台
        </Link>
      </div>
    </div>
  );
}