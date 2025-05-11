// Card flip interaction for .card-stack

document.addEventListener('DOMContentLoaded', function () {
  const stack = document.querySelector('.card-stack');
  const cards = stack ? stack.querySelectorAll('.card') : [];
  function updateStackClass() {
    if ([...cards].some(c => c.classList.contains('flipped'))) {
      stack.classList.add('has-flipped');
    } else {
      stack.classList.remove('has-flipped');
    }
  }
  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      cards.forEach(c => c.classList.remove('flipped'));
      card.classList.add('flipped');
      updateStackClass();
    });
  });
  // También al hacer click fuera
  document.addEventListener('click', function(e) {
    if (stack && !stack.contains(e.target)) {
      cards.forEach(c => c.classList.remove('flipped'));
      updateStackClass();
    }
  });
});
