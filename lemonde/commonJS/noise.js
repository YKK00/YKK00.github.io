const canvas = document.getElementById("noise-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 透明度
var opacity = 0.5;
// 浓度
var noiseDensity = 0.02;

// 生成噪点数据
function generateNoise(ctx, width, height) {
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    if (Math.random() < noiseDensity) {
      const grayValue = Math.random() * 255;

      data[i] = grayValue;
      data[i + 1] = grayValue;
      data[i + 2] = grayValue;
      data[i + 3] = 255 * opacity;
    } else {
      data[i + 3] = 0;
    }
  }

  return imageData;
}

// 动画渲染循环
function animate() {
  requestAnimationFrame(animate);

  const noiseData = generateNoise(ctx, canvas.width, canvas.height);
  ctx.putImageData(noiseData, 0, 0);
}

animate();

// 调整窗口大小时更新画布尺寸
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
