import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 检查登录状态，从cookie中获取
  const user = request.cookies.get('user')
  
  // 如果用户未登录且访问的是/admin路径下的页面，跳转到登录页
  if (!user && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  // 如果用户已登录且访问登录页，跳转到后台首页
  if (user && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/admin', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/admin/:path*'],
}
