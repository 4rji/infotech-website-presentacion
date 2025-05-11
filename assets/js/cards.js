// Card interaction for .card-stack

document.addEventListener('DOMContentLoaded', function () {
  const stack = document.querySelector('.card-stack');
  const cards = stack ? stack.querySelectorAll('.card') : [];
  const details = document.getElementById('card-details');
  
  // Contenido de cada tarjeta
  const cardContents = [
    `<div style='color: #fff; font-family: \'Segoe UI\', Arial, sans-serif;'>
      <h3 style='color: #4a90e2; font-size: 1.4em; margin-bottom: 1em; border-bottom: 1px solid #2a4b7c; padding-bottom: 0.5em;'>Key Achievements</h3>
      <ul style='list-style: none; padding: 0; margin: 0;'>
        <li style='padding: 0.7em 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;'>
          <span style='color: #4a90e2; margin-right: 10px; font-size: 1.2em;'>✓</span>
          <span>AI-based threat detection prototype</span>
        </li>
        <li style='padding: 0.7em 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;'>
          <span style='color: #4a90e2; margin-right: 10px; font-size: 1.2em;'>✓</span>
          <span>Real-time response on low-cost hardware</span>
        </li>
        <li style='padding: 0.7em 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;'>
          <span style='color: #4a90e2; margin-right: 10px; font-size: 1.2em;'>✓</span>
          <span>Intuitive UI for monitoring & alerts</span>
        </li>
        <li style='padding: 0.7em 0; display: flex; align-items: center;'>
          <span style='color: #4a90e2; margin-right: 10px; font-size: 1.2em;'>✓</span>
          <span>Maintained budget discipline</span>
        </li>
      </ul>
    </div>`,
    `<div style='color: #fff; font-family: \'Segoe UI\', Arial, sans-serif;'>
      <h3 style='color: #e2b04a; font-size: 1.4em; margin-bottom: 1em; border-bottom: 1px solid #7c6a2a; padding-bottom: 0.5em;'>Challenges Faced</h3>
      <ul style='list-style: none; padding: 0; margin: 0;'>
        <li style='padding: 0.7em 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;'>
          <span style='color: #e2b04a; margin-right: 10px; font-size: 1.2em;'>!</span>
          <span>Real-time performance optimization</span>
        </li>
        <li style='padding: 0.7em 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;'>
          <span style='color: #e2b04a; margin-right: 10px; font-size: 1.2em;'>!</span>
          <span>Ensuring cross-platform compatibility</span>
        </li>
        <li style='padding: 0.7em 0; display: flex; align-items: center;'>
          <span style='color: #e2b04a; margin-right: 10px; font-size: 1.2em;'>!</span>
          <span>Limited training data availability</span>
        </li>
      </ul>
    </div>`,
    `<div style='color: #fff; font-family: \'Segoe UI\', Arial, sans-serif;'>
      <h3 style='color: #4ae2a7; font-size: 1.4em; margin-bottom: 1em; border-bottom: 1px solid #2a7c5f; padding-bottom: 0.5em;'>Future Improvements</h3>
      <ul style='list-style: none; padding: 0; margin: 0;'>
        <li style='padding: 0.7em 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;'>
          <span style='color: #4ae2a7; margin-right: 10px; font-size: 1.2em;'>→</span>
          <span>Enhanced log generator functionality</span>
        </li>
        <li style='padding: 0.7em 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;'>
          <span style='color: #4ae2a7; margin-right: 10px; font-size: 1.2em;'>→</span>
          <span>Extended system integration timeline</span>
        </li>
        <li style='padding: 0.7em 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;'>
          <span style='color: #4ae2a7; margin-right: 10px; font-size: 1.2em;'>→</span>
          <span>Early UI/UX feedback from end users</span>
        </li>
        <li style='padding: 0.7em 0; display: flex; align-items: center;'>
          <span style='color: #4ae2a7; margin-right: 10px; font-size: 1.2em;'>→</span>
          <span>Staged rollout with pilot environments</span>
        </li>
      </ul>
    </div>`
  ];

  // Manejar clic en las tarjetas
  cards.forEach(function(card, idx) {
    card.addEventListener('click', function() {
      // Remover clase activa de todas las tarjetas
      cards.forEach(c => c.classList.remove('active'));
      // Agregar clase activa a la tarjeta clickeada
      card.classList.add('active');
      // Mostrar el detalle correspondiente
      if(details) {
        details.innerHTML = cardContents[idx];
      }
    });
  });

  // Opcional: Cerrar detalles al hacer clic fuera
  document.addEventListener('click', function(e) {
    if (stack && !stack.contains(e.target) && !details.contains(e.target)) {
      cards.forEach(c => c.classList.remove('active'));
      details.innerHTML = `
        <div style="color: #fff; font-size: 1.2em; opacity: 0.8;">
          Select a card to view details
        </div>
      `;
    }
  });
});
