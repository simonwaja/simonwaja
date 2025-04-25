// Typewriter effect for hero text
const typewriter = (element, text, speed = 100) => {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
};

typewriter(document.querySelector('.hero h1'), 'Hello, I’m Simon');
