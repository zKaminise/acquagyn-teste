import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
const source = process.argv[2] || 'assets/original';
await mkdir('public/images', { recursive: true });
const files = {
  pool: 'facility-pool-main-new2-Dyg5BGYK.jpg',
  hidro: 'facility-hidro-class-DPGGbFoX.jpg',
  reception: 'facility-reception-new2-CBvvw2Xy.jpg',
  materials: 'facility-materials-new-DaGtHzLM.jpg',
  accessibility: 'facility-accessibility-UUfbC4lB.jpg',
};
for (const [name, file] of Object.entries(files)) {
  for (const width of [640, 960, 1280]) {
    await sharp(path.join(source, file))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(`public/images/${name}-${width}.webp`);
  }
}
await copyFile(path.join(source, 'logo-acquagyn-DURnffAc.png'), 'public/images/logo.png');
await sharp(path.join(source, 'logo-acquagyn-DURnffAc.png'))
  .extract({ left: 130, top: 0, width: 220, height: 156 })
  .resize(64, 64, { fit: 'contain', background: '#ffffff' })
  .png()
  .toFile('public/favicon.png');
for (const width of [640, 1280, 1672]) {
  await sharp(path.join(source, 'acquagyn-water-hero.png'))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 83 })
    .toFile(`public/images/water-${width}.webp`);
}
const mascots = {
  estrelinha: 'mascot-estrelinha-G_YDCWGu.jpg',
  bibi: 'mascot-bibi-C6Ry7bY5.jpg',
  acqua: 'mascot-acqua-DESH616f.jpg',
  tuca: 'mascot-tuca-DpcUz3iu.jpg',
  delfim: 'mascot-delfim-YkFetmXC.jpg',
  luma: 'mascot-luma-CO71wKLj.jpg',
  caranguejo: 'mascot-caranguejo-CrP30Ype.jpg',
  cavalo: 'mascot-cavalo-D1UbLkNO.jpg',
};
for (const [name, file] of Object.entries(mascots)) {
  await sharp(path.join(source, file))
    .resize(128, 128)
    .webp({ quality: 82 })
    .toFile(`public/images/mascot-${name}.webp`);
}
console.log('Real facility photographs optimized in three responsive sizes.');
