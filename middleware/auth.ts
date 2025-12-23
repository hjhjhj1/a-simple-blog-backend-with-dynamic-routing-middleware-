import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 获取登录态
  const user = request.cookies.get('user')?.value;

  // 检查是否是/admin路径且未登录
  if (request.nextUrl.pathname.startsWith('/admin') && !user) {
    // 重定向到登录页
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 已登录或非/admin路径，继续
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};