document.addEventListener('click', (e) => {
  const target = e.target.closest('.redacted');
  if (target) {
    target.classList.toggle('is-revealed');
  }
});