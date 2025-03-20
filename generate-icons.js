import fs from 'fs';

const svgTemplate = `
<svg width="SIZE" height="SIZE" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100" fill="#4a90e2"/>
  <rect x="10" y="10" width="80" height="80" fill="white"/>
  <rect x="20" y="20" width="60" height="20" fill="#e8e8e8"/>
  <g transform="translate(20, 50)">
    <rect x="0" y="0" width="15" height="15" fill="#f44336"/>
    <rect x="22" y="0" width="15" height="15" fill="#4caf50"/>
    <rect x="44" y="0" width="15" height="15" fill="#2196f3"/>
    <rect x="0" y="22" width="15" height="15" fill="#4caf50"/>
    <rect x="22" y="22" width="15" height="15" fill="#2196f3"/>
    <rect x="44" y="22" width="15" height="15" fill="#f44336"/>
  </g>
</svg>`;

function generateIcon(size) {
  const svg = svgTemplate.replace(/SIZE/g, size);

  if (!fs.existsSync('./icons')) {
    fs.mkdirSync('./icons', { recursive: true });
  }

  fs.writeFileSync(`./icons/icon-${size}x${size}.svg`, svg);

  console.log(`Generated ${size}x${size} icon`);
}

// Generate both required sizes
generateIcon(192);
generateIcon(512);

console.log('Icons generated successfully!');
