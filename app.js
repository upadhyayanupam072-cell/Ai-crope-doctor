// Key snippet from app.js: 0-100 Crop Health Score Algorithm
function analyzeCanvasPixels(canvas, filename = '') {
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const imgData = ctx.getImageData(0, 0, width, height).data;

  let greenCount = 0, yellowCount = 0, brownSpotCount = 0, totalPixels = 0;

  for (let i = 0; i < imgData.length; i += 16) {
    const r = imgData[i], g = imgData[i + 1], b = imgData[i + 2];
    if ((r + g + b) < 40 || (r > 240 && g > 240 && b > 240)) continue;
    totalPixels++;

    if (g > r * 1.08 && g > b * 1.15) {
      greenCount++;
    } else if (r > 130 && g > 110 && b < 95) {
      yellowCount++; // Chlorosis
    } else if (r > g && b < 100) {
      brownSpotCount++; // Necrotic lesions
    } else {
      greenCount++;
    }
  }

  const greenPct = Math.min(96, Math.max(25, Math.round((greenCount / totalPixels) * 100)));
  const yellowPct = Math.min(60, Math.max(4, Math.round((yellowCount / totalPixels) * 100)));
  const spotPct = Math.max(2, 100 - greenPct - yellowPct);

  // Health Score from 0 to 100
  const healthScore = Math.min(98, Math.max(28, Math.round(greenPct * 0.95 - spotPct * 0.35 + 10)));
  return { healthScore, greenPct, yellowPct, spotPct };
} 


//Start-Process "C:\Users\anjal\.gemini\antigravity\scratch\ai-crop-doctor\index.html"
