//Extract nodes and calculate users

function extractNodes() {
  const text = document.getElementById('inputData').value;
  const lines = text.trim().split('\n');

  const nodeNamesSet = new Set();
  let totalUsers = 0;

  lines.forEach(line => {
    line = line.trim(); // Trim the line to remove any trailing or leading spaces
    let nodeName = '';
    let usersMatch;

    // Blicnet
    const nodMatchBlicnet = line.match(/===\s*NOD\s*(.*?)\s*===/);
    if (nodMatchBlicnet) {
      nodeName = nodMatchBlicnet[1].trim();
      usersMatch = line.match(/\s+(\d+)\s+\d{1,2}:\d{2}\s*(AM|PM)?$/);
    }

    // Elta Kabel
    const nodMatchElta = line
      .split('·')[1]
      ?.trim()
      .split(/\s+\d+\s+/)[0];
    if (!nodeName && nodMatchElta) {
      nodeName = nodMatchElta.replace(/\[|\]/g, '').trim();
      usersMatch = line.match(/\s+(\d+)\s+\d{1,2}:\d{2}\s*(AM|PM)?$/);
    }

    // Telrad
    const nodMatchTelrad = line.match(/\[(.*?)\]/);
    if (!nodeName && nodMatchTelrad) {
      nodeName = nodMatchTelrad[1].trim();
      usersMatch = line.match(/\s+(\d+)\s+\d{1,2}:\d{2}\s*(AM|PM)?$/);
    }

    if (nodeName && usersMatch) {
      nodeNamesSet.add(nodeName);
      const users = parseInt(usersMatch[1], 10);
      if (!isNaN(users)) {
        totalUsers += users;
      }
    }
  });

  const nodeNames = Array.from(nodeNamesSet).join(', ');

  document.getElementById('outputNodes').innerText = nodeNames;
  document.getElementById('totalUsers').innerText = totalUsers;

  document.getElementById('inputData').value === '';
  copyToClipboards(nodeNames);
  if (document.getElementById('inputData').value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Prazno polje !!',
      text: 'Input polje je prazno.',
    });
  } else {
    Swal.fire({
      text: 'Nodovi su kopirani u clipboard',
      title: 'Nodovi uspješno kopirani !',
      icon: 'success',
    });
  }
}

function copyToClipboards(text) {
  var textarea = document.createElement('textarea');
  textarea.textContent = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

// Sortiranje po SNR
function sorting() {
  const textArea = document.getElementById('inputData');
  return (textArea.value = textArea.value
    .split('\n')
    .sort((a, b) => {
      const snrA = parseInt(a.match(/\s(\d+)\s+\d{1,2}:\d{2}/)[1], 10);
      const snrB = parseInt(b.match(/\s(\d+)\s+\d{1,2}:\d{2}/)[1], 10);
      return snrB - snrA; // Sortiranje od većeg prema manjem
    })
    .join('\n'));
}

// Povezivanje klik događaja na dugme
document.getElementById('btnSort').addEventListener('click', function (e) {
  e.preventDefault(); // Sprečava podrazumevani događaj

  sorting(); // Pozivanje funkcije za sortiranje
});

//Sorting po imenu noda
// function sorting() {
//   return (inputData.value = inputData.value.split('\n').sort().join('\n'));
// }

// btnSortName.addEventListener('click', function (e) {
//   e.preventDefault();

//   sorting();
// });

// Sortiranje po imenu noda
function sortingByName() {
  const textArea = document.getElementById('inputData');
  return (textArea.value = textArea.value
    .split('\n')
    .sort((a, b) => {
      // Pretpostavljamo da je ime noda sve do prvog broja korisnika u liniji
      const nameA = a.split(' ')[0].toLowerCase();
      const nameB = b.split(' ')[0].toLowerCase();
      return nameA.localeCompare(nameB); // Sortiranje abecedno
    })
    .join('\n'));
}

// Povezivanje dugmeta za sortiranje po imenu
document.getElementById('btnSortName').addEventListener('click', function (e) {
  e.preventDefault(); // Sprečava podrazumevani događaj

  sortingByName(); // Pozivanje funkcije za sortiranje po imenu
});

// Pretraga
document.addEventListener('DOMContentLoaded', function () {
  const inputLine = document.getElementById('inputLine');
  const inputData = document.getElementById('inputData');
  let originalText = inputData.value;

  inputLine.addEventListener('input', function () {
    const searchQuery = inputLine.value.toLowerCase();
    const lines = originalText.split('\n');
    const filteredLines = lines.filter(line =>
      line.toLowerCase().includes(searchQuery)
    );

    if (searchQuery === '') {
      inputData.value = originalText;
    } else {
      inputData.value = filteredLines.join('\n');
    }
  });

  inputData.addEventListener('input', function () {
    originalText = inputData.value;
  });
});

// function scrollToNode() {
//   const element = document.getElementById('brojKorisnika');
//   element.scrollIntoView({ behavior: 'smooth' });
// }
// window.onload = function () {
//   // Ovde postavljate poziv funkcije scrollToElement()
//   scrollToNode();
// };
