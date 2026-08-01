import { NextResponse } from 'next/server';

export function middleware(request) {
  // Return a custom HTML Maintenance page for all incoming requests
  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Maintenance Mode</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #fafafa; display: flex; height: 100vh; justify-content: center; align-items: center; margin: 0; text-align: center; }
            .card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 400px; }
            h1 { color: #171717; font-size: 24px; margin-bottom: 10px; }
            p { color: #666; font-size: 16px; line-height: 1.5; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>We'll Be Right Back</h1>
            <p>Our website is currently undergoing scheduled maintenance. Please check back shortly!</p>
        </div>
    </body>
    </html>`,
    {
      status: 503, // Tell search engines the site is temporarily down
      headers: { 'content-type': 'text/html' },
    }
  );
}

// Ensure it runs on all pages
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
