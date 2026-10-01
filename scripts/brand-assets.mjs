import sharp from 'sharp';

// The supplied logo is kept intact. Only application sizes and backgrounds change.
const mark = await sharp('public/images/logo.png')
  .extract({ left: 130, top: 0, width: 220, height: 156 })
  .png()
  .toBuffer();
for (const [file, size] of [
  ['favicon.png', 96],
  ['apple-touch-icon.png', 180],
]) {
  const inset = Math.round(size * 0.15);
  const icon = await sharp(mark)
    .resize(size - inset * 2, size - inset * 2, { fit: 'contain', background: '#ffffff' })
    .png()
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 3, background: '#ffffff' } })
    .composite([{ input: icon, gravity: 'centre' }])
    .png()
    .toFile(`public/${file}`);
}
const logo = await sharp('public/images/logo.png').resize({ width: 330 }).png().toBuffer();
const pool = await sharp('public/images/pool-1280.webp')
  .resize(480, 630, { fit: 'cover', position: 'centre' })
  .toBuffer();
const text = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 545 Q230 480 445 550 T900 520" fill="none" stroke="#009ad4" stroke-opacity=".25" stroke-width="2"/>
  <text x="62" y="330" font-family="Arial,sans-serif" font-size="49" fill="#163e70">Educação e saúde</text>
  <text x="62" y="390" font-family="Arial,sans-serif" font-size="49" fill="#163e70">por meio da água.</text>
  <text x="64" y="466" font-family="Arial,sans-serif" font-size="23" fill="#375e76">Natação e Hidroginástica</text>
  <text x="64" y="507" font-family="Arial,sans-serif" font-size="21" fill="#375e76">Desde 1994 · Uberlândia, MG</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f3f6f4' } })
  .composite([
    { input: pool, left: 720, top: 0 },
    { input: logo, left: 62, top: 46 },
    { input: text },
  ])
  .jpeg({ quality: 88 })
  .toFile('public/images/acquagyn-social.jpg');
console.log('Official logo preserved; icons and social cover prepared.');
