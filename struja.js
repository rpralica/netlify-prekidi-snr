function processText() {
  // Uzimanje teksta iz text area
  const inputText = document.getElementById('inputText').value;

  // Razdvajanje teksta po novim linijama i uklanjanje praznih linija
  const lines = inputText.split('\n').filter(line => line.trim() !== '');

  // Spajanje linija sa zarezima
  const result = lines.join(', ');

  // Prikaz rezultata u divu
  const outputDiv = document.getElementById('output');
  outputDiv.innerText = result;
  document.getElementById('inputText').focus();

  // Kopiranje rezultata u clipboard
  copyToClipboard(result);
  const input = document.getElementById('inputText');
  input.value = '';
}

function copyToClipboard(text) {
  // Kreiranje privremenog elementa za kopiranje teksta
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);

  // Selektovanje teksta
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // Za mobilne uređaje

  // Kopiranje teksta u clipboard
  document.execCommand('copy');

  // Uklanjanje privremenog elementa
  document.body.removeChild(tempInput);

  // Obavještenje korisnika o kopiranju u clipboard
  if (document.getElementById('inputText').value.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Prazno polje !!',
      text: 'Input polje je prazno.',
    });
  }
}

// Orion20
document.getElementById('btnOrion20').addEventListener('click', function () {
  const inputArea = document.getElementById('inputOrion20');
  const outputArea = document.getElementById('outputOrion20');
  const input = inputArea.value;
  const lines = input.trim().split('\n');
  const outputLines = [];

  lines.forEach(line => {
    let deviceName = '';

    // Pokušaj split po tabovima
    let parts = line.split('\t');
    if (parts.length >= 3) {
      deviceName = parts[2].split(' ')[0]; // prvi token u trećoj koloni
    } else {
      // Ako nema tabova, split po razmacima
      parts = line.split(/\s+/);
      if (parts.length >= 4) {
        deviceName = parts[3]; // četvrti token
      }
    }

    if (deviceName) {
      outputLines.push(deviceName);
    }
  });

  const result = outputLines.join('\n');
  outputArea.value = result;

  // Kopiraj automatski u clipboard
  navigator.clipboard
    .writeText(result)
    .then(() => {
      showToast('Kopirano u clipboard ✅');
    })
    .catch(err => console.error('Greška pri kopiranju:', err));

  // Očisti input textarea
  inputArea.value = '';
});

// Funkcija za Bootstrap toast
function showToast(message) {
  // Kreiraj toast element
  const toastEl = document.createElement('div');
  toastEl.style.position = 'fixed';
  toastEl.style.bottom = '20px';
  toastEl.style.right = '20px';
  toastEl.style.backgroundColor = '#198754'; // Bootstrap success green
  toastEl.style.color = 'white';
  toastEl.style.padding = '10px 20px';
  toastEl.style.borderRadius = '8px';
  toastEl.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
  toastEl.style.zIndex = '9999';
  toastEl.textContent = message;

  document.body.appendChild(toastEl);

  // Fade out i ukloni nakon 2.5s
  setTimeout(() => {
    toastEl.style.transition = 'opacity 0.5s';
    toastEl.style.opacity = '0';
    setTimeout(() => toastEl.remove(), 500);
  }, 2500);
}