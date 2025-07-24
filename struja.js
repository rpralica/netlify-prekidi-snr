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
