// cloudflare-worker.js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 自定义路由规则
    if (url.pathname.startsWith('/api/')) {
      return handleAPIRequest(request);
    }
    
    // 默认转发到 GitHub Pages
    return fetch(`https://username.github.io${url.pathname}`, {
      headers: request.headers,
      cf: {
        cacheEverything: true,
        cacheTtl: 86400 // 24小时缓存
      }
    });
  }
}

async function handleAPIRequest(request) {
  // 处理 API 请求
  return new Response('API Response');
}
