import sharp from "sharp";
// Original typographic social preview; no project UI or personal imagery is fabricated.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#FFFBF4"/>
<path d="M65 108H1135M65 531H1135" stroke="#D8CFBC"/>
<g font-family="Arial, sans-serif" fill="#11120D">
<text x="65" y="77" font-size="29" font-weight="700" letter-spacing="-2">RZN.</text>
<text x="870" y="73" font-size="13" letter-spacing="3">PORTFOLIO / 2026</text>
<text x="61" y="255" font-size="116" font-weight="700" letter-spacing="-6">RAYKENZIE</text>
<text x="62" y="368" font-size="116" font-weight="700" letter-spacing="-6" fill="#565449">NAZARU.</text>
<text x="68" y="425" font-size="20">Raykenzie Nazaru Fathurrahmansyah</text>
<text x="68" y="472" font-size="18" fill="#565449">Developer · IoT · AI · Research &amp; Development</text>
<text x="65" y="575" font-size="13" letter-spacing="2">JAKARTA, INDONESIA</text>
<text x="941" y="575" font-size="13" letter-spacing="2">SELECTED WORK</text>
</g></svg>`;
await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
