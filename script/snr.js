const cityCodes = {
  bl: 'Banja Luka',
  bn: 'Bijeljina',
  brod: 'Brod',
  br: 'Brčko',
  bt: 'Bratunac',
  cajnice: 'Čajniče',
  cz: 'Cazin',
  de: 'Derventa',
  dubica: 'Kozarska Dubica',
  dbc: 'Kozarska Dubica',
  foca: 'Foča',
  grd: 'Gradiška',
  is: 'Istočno Sarajevo',
  kv: 'Kotor Varoš',
  lkt: 'Laktaši',
  mg: 'Mrkonjić Grad',
  mod: 'Modriča',
  ng: 'Novi Grad',
  pale: 'Pale',
  pd: 'Prijedor',
  rog: 'Rogatica',
  sekovici: 'Šekovići',
  sok: 'Sokolac',
  srb: 'Srbac',
  trb: 'Trebinje',
  tslc: 'Teslić',
  uglj: 'Ugljevik',
  vla: 'Vlasenica',
  vsgd: 'Višegrad',
  zv: 'Zvornik',
  do: 'Doboj',
  der: 'Derventa',
  nev: 'Nevesinje',
  Zvornik: 'Zvornik',
  ga: 'Gacko',
};

document.getElementById('processBtn').addEventListener('click', processData);
document.getElementById('copyAllBtn').addEventListener('click', copyAllTables);

function processData() {
  const input = document.getElementById('dataInput').value;
  const lines = input.split('\n').filter(line => line.trim() !== '');
  if (!input) {
    Swal.fire({
      icon: 'warning',
      title: 'Nema unosa',
      text: 'Molimo unesite podatke prije nego što ih procesuirate.',
    });
    return;
  }
  const parsedData = {};

  lines.forEach(line => {
    // Ažuriran regex: (Cable\d+\/\d+(?:\/\d+)?)
    // Ovo sada dopušta CableX/Y ili CableX/Y/Z
    const match = line.match(
      /(.+?)\s*-\s*(Cable\d+\/\d+(?:\/\d+)?)-(upstream\d+)\s*·\s*(.+?)\s*(\d+\.\d+)\s*\d+:\d+\s*(?:AM|PM)/
    );

    if (match) {
      const cmts = match[1].trim();
      const interfaceFull = match[2].trim();
      const node = match[4].trim();
      const snr = parseFloat(match[5]);

      const cmtsInterfaceKey = `${cmts}-${interfaceFull}`;

      if (!parsedData[cmtsInterfaceKey]) {
        parsedData[cmtsInterfaceKey] = {
          cmts: cmts,
          interface: interfaceFull,
          node: node,
          minSnr: snr,
        };
      } else if (snr < parsedData[cmtsInterfaceKey].minSnr) {
        parsedData[cmtsInterfaceKey].minSnr = snr;
      }
    } else {
      console.warn('Linija se ne podudara sa očekivanim formatom:', line);
    }
  });

  const groupedByCity = {};

  for (const key in parsedData) {
    const item = parsedData[key];
    const cmtsHost = item.cmts;
    let cityCode = '';

    const cmtsPrefixMatch = cmtsHost.match(/^([a-z]+)-/);
    if (cmtsPrefixMatch) {
      cityCode = cmtsPrefixMatch[1].toLowerCase();
    } else if (cmtsHost.toLowerCase().includes('zvornik')) {
      cityCode = 'zvornik';
    } else if (
      cmtsHost.toLowerCase().includes('derventa') ||
      cmtsHost.toLowerCase().includes('der')
    ) {
      cityCode = 'der';
    } else if (
      cmtsHost.toLowerCase().includes('doboj') ||
      cmtsHost.toLowerCase().includes('do')
    ) {
      cityCode = 'do';
    } else if (
      cmtsHost.toLowerCase().includes('grd') ||
      cmtsHost.toLowerCase().includes('gradiska')
    ) {
      cityCode = 'grd';
    } else if (cmtsHost.toLowerCase().includes('sekovici')) {
      // Dodato za Šekoviće
      cityCode = 'sekovici';
    } else {
      cityCode = 'ostalo';
    }

    const cityName = cityCodes[cityCode] || 'Nepoznat Grad (' + cityCode + ')';

    if (!groupedByCity[cityName]) {
      groupedByCity[cityName] = {};
    }
    if (!groupedByCity[cityName][cmtsHost]) {
      groupedByCity[cityName][cmtsHost] = [];
    }

    const outputLine = {
      interfaceNode: `${item.interface} · ${item.node}`,
      snr: item.minSnr,
    };
    groupedByCity[cityName][cmtsHost].push(outputLine);
  }

  displayResults(groupedByCity);

  document.getElementById('copyAllBtn').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('dataInput').value = '';
}

function displayResults(groupedData) {
  const outputContainer = document.getElementById('outputTablesContainer');
  outputContainer.innerHTML += `<strong>Kolege,
U nastavku spisak čvorišta sa lošim SNR parametrima.Na ovim područjima<br>
 moguća degradacija servisa ka korisniku: </strong>`;

  for (const cityName in groupedData) {
    for (const cmtsName in groupedData[cityName]) {
      const cmtsDiv = document.createElement('div');
      cmtsDiv.classList.add('cmts-group', 'mb-3');

      const headerText = `
                    ${cityName} CMTS: ${cmtsName}`;
      cmtsDiv.innerHTML += `<div class="city-cmts-header" style="font-weight: bold; background-color: #e9ecef; padding: 8px 5px;">${headerText}</div>`;

      const table = document.createElement('table');
      table.classList.add('table', 'table-bordered', 'output-table');

      const tbody = document.createElement('tbody');
      groupedData[cityName][cmtsName].forEach(item => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerHTML = `
                            <div class="incident-line">
                                <span>${item.interfaceNode}</span>
                                <span style="font-weight:bold">${item.snr}</span>
                            </div>
                        `;
        tr.appendChild(td);
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      cmtsDiv.appendChild(table);
      outputContainer.appendChild(cmtsDiv);
    }
  }
  document.getElementById('outputSection').style.display = 'block';
}

async function copyAllTables() {
  const outputTablesContainer = document.getElementById(
    'outputTablesContainer'
  );
  const tempDiv = document.getElementById('copyTempDiv');
  tempDiv.innerHTML = '';

  let htmlToCopy = `<br><strong>Kolege,
U nastavku spisak čvorišta sa lošim SNR parametrima.Na ovim područjima<br>
 moguća degradacija servisa ka korisniku: </strong> <br><br><br>`;

  for (const cmtsGroup of outputTablesContainer.querySelectorAll(
    '.cmts-group'
  )) {
    const headerText = cmtsGroup.querySelector('.city-cmts-header').textContent;
    htmlToCopy += `<div style="font-weight: bold; background-color: #e9ecef; padding: 8px 5px; margin-top: 15px; margin-bottom: 10px;">${headerText}</div>`;

    htmlToCopy += `<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;"><tbody>`;
    cmtsGroup
      .querySelectorAll('.output-table tbody tr')
      .forEach((row, index) => {
        const interfaceNode = row.querySelector(
          '.incident-line span:first-child'
        ).textContent;
        const snr = row.querySelector(
          '.incident-line span:last-child'
        ).textContent;
        const bgColor = index % 2 === 0 ? '#f2f2f3' : '#ffffff';

        htmlToCopy += `<tr style="background-color: ${bgColor};">`;
        htmlToCopy += `<td style="padding: 5px; vertical-align: top; border: 1px solid #dee2e6;">`;
        htmlToCopy += `<div style="display: flex; justify-content: space-between; width: 100%;">`;
        htmlToCopy += `<span style="flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 10px;">${interfaceNode}</span>`;
        htmlToCopy += `<span style="white-space: nowrap; flex-shrink: 0; text-align: right; min-width: 40px;"><strong>${snr}</strong></span>`;
        htmlToCopy += `</div>`;
        htmlToCopy += `</td>`;
        htmlToCopy += `</tr>`;
      });
    htmlToCopy += `</tbody></table>`;
    htmlToCopy += `<table style="border: none; width: 100%; margin-top: 10px; margin-bottom: 10px;"><tbody><tr><td style="padding: 0; line-height: 0; border: none;">&nbsp;</td></tr></tbody></table>`;
  }

  tempDiv.innerHTML = htmlToCopy;

  try {
    const range = document.createRange();
    range.selectNode(tempDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    const successful = document.execCommand('copy');

    if (successful) {
      Swal.fire({
        icon: 'success',
        title: 'Uspješno Kopiranje',
        text: 'Sadržaj je uspješno kopiran .',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Kopiranje nije uspjelo ',
      });
    }
  } catch (err) {
    console.error('Greška pri kopiranju:', err);
    alert('Greška pri kopiranju: ' + err.message);
  } finally {
    window.getSelection().removeAllRanges();
    tempDiv.innerHTML = '';
  }
}
