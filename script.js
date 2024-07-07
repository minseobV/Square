document.addEventListener('DOMContentLoaded', () => {
  const charactor = document.getElementById('charactor');
  let topPosition = charactor.offsetTop;
  let leftPosition = charactor.offsetLeft;

  document.addEventListener('keydown', (event) => {
    if(event.key === 'w' || event.key === 'W') {
      topPosition -= 50;
      charactor.style.top = `${topPosition}px`;
    }
    if(event.key === 's' || event.key === 'S') {
      topPosition += 50;
      charactor.style.top = `${topPosition}px`;
    }
    if(event.key === 'a' || event.key === 'A'){
      leftPosition -= 50;
      charactor.style.left = `${leftPosition}px`;
    }
    if(event.key === 'd' || event.key === 'D'){
      leftPosition += 50;
      charactor.style.left = `${leftPosition}px`;
    }
  });
});  