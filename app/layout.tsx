import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '简易博客后台',
  description: '基于 Next.js 的动态路由 + 中间件博客后台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}