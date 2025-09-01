// function convertTable() {
//   const input = document.getElementById('input').value.trim();
//   if (!input) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Greška',
//       text: 'Niste zalijepili tekst!',
//     });
//     return;
//   }

//   const lines = input.split('\n').filter(l => l.trim() !== '');
//   const groups = {};

//   lines.forEach(line => {
//     let cols = line.split('\t').map(c => c.trim());
//     if (cols.length < 4) {
//       cols = line.split(/\s{2,}/).map(c => c.trim());
//     }
//     if (cols.length < 4) return;

//     const grad = cols[0];
//     if (grad.toLowerCase() === 'bužim') return;

//     const lokacija = cols[1];
//     const vrijeme = cols[3];
//     let pocetno = '',
//       kraj = '';
//     if (vrijeme.includes('-')) {
//       [pocetno, kraj] = vrijeme.split('-').map(v => v.trim());
//     } else {
//       pocetno = vrijeme;
//     }

//     const key = grad + '||' + pocetno + '||' + kraj;
//     if (!groups[key]) {
//       groups[key] = { grad: grad, lokacije: [], pocetno: pocetno, kraj: kraj };
//     }
//     groups[key].lokacije.push(lokacija);
//   });

//   const sortedKeys = Object.keys(groups).sort((a, b) => {
//     const gradA = groups[a].grad.toLowerCase();
//     const gradB = groups[b].grad.toLowerCase();
//     return gradA.localeCompare(gradB);
//   });

//   const outputLines = [];
//   const tbody = document.querySelector('#resultTable tbody');
//   tbody.innerHTML = '';

//   sortedKeys.forEach(key => {
//     const g = groups[key];
//     const line = [g.grad, '', g.lokacije.join(', '), g.pocetno, g.kraj].join(
//       '\t'
//     );
//     outputLines.push(line);

//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//             <td>${g.grad}</td>
//             <td></td>
//             <td>${g.lokacije.join(', ')}</td>
//             <td>${g.pocetno}</td>
//             <td>${g.kraj}</td>
//         `;
//     tbody.appendChild(tr);
//   });

//   const finalOutput = outputLines.join('\n');
//   document.getElementById('output').value = finalOutput;

//   // Kopiranje u clipboard
//   navigator.clipboard
//     .writeText(finalOutput)
//     .then(() => {
//    Swal.fire({
//      title: 'Bravo!',
//      text: 'Podaci su uspješno kopirani u clipboard!',
//      icon: 'success',
//    });
//     })
//     .catch(err => {
//       Swal.fire({
//         icon: 'error',
//         title: 'Greška',
//         text: 'Došlo je do greške prilikom kopiranja.',
//       });
//       console.error('Greška prilikom kopiranja:', err);
//     });
// }


function convertTable() {
  const input = document.getElementById('input').value.trim();
  if (!input) {
    Swal.fire({
      icon: 'error',
      title: 'Greška',
      text: 'Niste zalijepili tekst!',
    });
    return;
  }

  const lines = input.split('\n').filter(l => l.trim() !== '');
  const groups = {};

  lines.forEach(line => {
    let cols = line.split('\t').map(c => c.trim());
    if (cols.length < 4) {
      cols = line.split(/\s{2,}/).map(c => c.trim());
    }
    if (cols.length < 4) return;

    const grad = cols[0];
    if (grad.toLowerCase() === 'bužim') return;

    const lokacija = cols[1];
    const vrijeme = cols[3];
    let pocetno = '',
      kraj = '';
    if (vrijeme.includes('-')) {
      [pocetno, kraj] = vrijeme.split('-').map(v => v.trim());
    } else {
      pocetno = vrijeme;
    }

    const key = grad + '||' + pocetno + '||' + kraj;
    if (!groups[key]) {
      groups[key] = { grad: grad, lokacije: [], pocetno: pocetno, kraj: kraj };
    }
    groups[key].lokacije.push(lokacija);
  });

  const sortedKeys = Object.keys(groups).sort((a, b) => {
    const gradA = groups[a].grad.toLowerCase();
    const gradB = groups[b].grad.toLowerCase();
    return gradA.localeCompare(gradB);
  });

  const outputLines = [];
  const tbody = document.querySelector('#resultTable tbody');
  tbody.innerHTML = '';

  sortedKeys.forEach(key => {
    const g = groups[key];
    const line = [g.grad, '', g.lokacije.join(', '), g.pocetno, g.kraj].join(
      '\t'
    );
    outputLines.push(line);

    const tr = document.createElement('tr');
    tr.innerHTML = `
            <td>${g.grad}</td>
            <td></td>
            <td>${g.lokacije.join(', ')}</td>
            <td>${g.pocetno}</td>
            <td>${g.kraj}</td>
        `;
    tbody.appendChild(tr);
  });

  const finalOutput = outputLines.join('\n');
  document.getElementById('output').value = finalOutput;

  // Kopiranje u clipboard
  navigator.clipboard
    .writeText(finalOutput)
    .then(() => {
      Swal.fire({
        title: 'Bravo!',
        text: 'Podaci su uspješno kopirani u clipboard!',
        icon: 'success',
      });
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Greška',
        text: 'Došlo je do greške prilikom kopiranja.',
      });
      console.error('Greška prilikom kopiranja:', err);
    });
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