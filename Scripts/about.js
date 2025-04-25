// Timeline item fade-in
document.querySelectorAll('.timeline-item').forEach((item, i) => {
  item.style.animationDelay = `${i * 0.2}s`;
});
