const listColors = [];

for (let i = 0; i < 6; i++) {
  listColors.push(getRandomColor());
}
console.log(listColors);
// 6 random colors are generated

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
self.addEventListener('message', function (e) {
  if (e.data.action === 'start') {
    let round = 0;
    clearInterval(self.interval);
    const currentTime = new Date().toString();
    const color = listColors[round];

    self.postMessage({ currentTime, color });
    self.interval = setInterval(() => {
      round += 1;
      if (round === listColors.length) {
        round = 0;
      }
      const currentTime = new Date().toString();
      const color = listColors[round];
      self.postMessage({ currentTime, color });
    }, 1000);
  } else if (e.data.action === 'stop') {
    clearInterval(self.interval);
  }
});