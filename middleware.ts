import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // 定义需要保护的路由
  const protectedRoutes = ['/admin', '/admin/post', '/admin/list'];
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  
  // 从 cookies 中获取登录状态
  const user = request.cookies.get('user')?.value;
  
  // 如果访问受保护路由但未登录，则重定向到登录页
  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // 如果已登录访问登录页，则重定向到后台首页
  if (path === '/login' && user) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }
  
  return NextResponse.next();
}