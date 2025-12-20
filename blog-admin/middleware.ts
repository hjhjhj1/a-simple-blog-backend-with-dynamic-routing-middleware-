import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 检查是否在管理页面
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // 尝试从 cookie 获取登录状态
    const user = request.cookies.get('user');

    if (!user) {
      // 未登录，重定向到登录页
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};