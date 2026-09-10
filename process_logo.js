const { Jimp } = require('jimp');

async function processLogo() {
  console.log('Reading image...');
  const image = await Jimp.read('logo_icon_source.jpg');
  
  // Crop precisely around the axe and pestle symbol
  image.crop({ x: 360, y: 200, w: 304, h: 445 });

  const width = image.bitmap.width;
  const height = image.bitmap.height;

  // Isolate icon by setting background pixels to transparent alpha
  image.scan(0, 0, width, height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;

    if (lightness < 110) {
      this.bitmap.data[idx + 3] = 0;
    } else if (lightness < 145) {
      const alpha = Math.floor(((lightness - 110) / 35) * 255);
      this.bitmap.data[idx + 3] = alpha;
    }
  });

  await image.write('logo-icon-transparent.png');
  console.log('Saved tightly cropped logo-icon-transparent.png!');
}

processLogo().catch(err => {
  console.error(err);
  process.exit(1);
});
