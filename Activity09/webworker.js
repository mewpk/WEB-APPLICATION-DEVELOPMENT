self.addEventListener('message', function (e) {
  if (e.data.action === 'start') {
    clearInterval(self.interval);
    const currentTime = new Date().toString();
    const color = getRandomColor();
    self.postMessage({ currentTime, color });
    self.interval = setInterval(() => {
      const currentTime = new Date().toString();
      const color = getRandomColor();
      self.postMessage({ currentTime, color });
    }, 1000);
  } else if (e.data.action === 'stop') {
    clearInterval(self.interval);
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
