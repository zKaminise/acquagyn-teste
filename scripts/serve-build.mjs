import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
const port = Number(process.env.PORT || 4322);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + path.sep)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const data = await readFile(file);
    response.writeHead(200, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    response.end(data);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(await readFile(path.join(root, '404.html')));
  }
}).listen(port, '127.0.0.1', () =>
  console.log(`Acquagyn production preview: http://127.0.0.1:${port}`),
);
