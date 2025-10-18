const cityCodes = {
  bl: 'Banja Luka',
  bn: 'Bijeljina',
  brod: 'Brod',
  brd: 'Brod',
  br: 'Brčko',
  bt: 'Bratunac',
  cajnice: 'Čajniče',
  cz: 'Cazin',
  de: 'Derventa',
  dubica: 'Kozarska Dubica',
  dbc: 'Kozarska Dubica',
  foca: 'Foča',
  fo: 'Foča',
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
  sokolac: 'Sokolac',
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
  const input = document.getElementById('dataInput').value.trim();
  if (!input) {
    Swal.fire({
      icon: 'warning',
      title: 'Nema unosa',
      text: 'Molimo unesite podatke prije nego što ih procesuirate.',
    });
    return;
  }

  const parsedData = {};
  const lines = input.split('\n');
  lines.forEach(line => {
    const match = line.match(
      /(.+?)\s*-\s*(Cable\d+\/\d+(?:\/\d+)?)-(upstream\d+)\s*·\s*(.+?)\s*(\d+\.\d+)/
    );
    if (!match) return;

    const cmts = match[1].trim();
    const interfaceFull = match[2].trim();
    const node = match[4].trim();
    const snr = parseFloat(match[5]);
    if (snr >= 25) return; // preskoči visoke SNR

    const key = `${cmts}-${interfaceFull}`;
    if (!parsedData[key])
      parsedData[key] = { cmts, interface: interfaceFull, node, minSnr: snr };
    else if (snr < parsedData[key].minSnr) parsedData[key].minSnr = snr;
  });

  const groupedByCity = {};
  Object.values(parsedData).forEach(item => {
    const cmtsHost = item.cmts;
    let cityCode = cmtsHost.match(/^([a-z]+)-/)?.[1]?.toLowerCase() || 'ostalo';
    const cityName = cityCodes[cityCode] || 'Nepoznat Grad (' + cityCode + ')';
    if (!groupedByCity[cityName]) groupedByCity[cityName] = {};
    if (!groupedByCity[cityName][cmtsHost])
      groupedByCity[cityName][cmtsHost] = [];
    groupedByCity[cityName][cmtsHost].push({
      interfaceNode: `${item.interface} · ${item.node}`,
      snr: item.minSnr,
    });
  });

  displayResults(groupedByCity);
  document.getElementById('dataInput').value = '';

  // ⬇️ Automatski skrol do Copy dugmeta
  setTimeout(() => {
    const copyBtn = document.getElementById('copyAllBtn');
    if (copyBtn) {
      copyBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 300);
}

function displayResults(groupedData) {
  const outputContainer = document.getElementById('outputTablesContainer');
  outputContainer.innerHTML = `<div style="margin-bottom:30px; margin-left:1rem;font-size:16px;"><strong>Kolege,<br>
   U nastavku spisak čvorišta sa lošim SNR parametrima. Na ovim područjima moguća degradacija servisa ka korisniku:</strong></div>`;

  for (const cityName in groupedData) {
    for (const cmtsName in groupedData[cityName]) {
      const table = document.createElement('table');
      // Inline stilovi za celu tabelu
      table.style.width = '70%';
      table.style.borderCollapse = 'collapse';
      table.style.marginBottom = '20px';
      table.style.tableLayout = 'fixed';
      // Postavljamo font za konzistentnost u svim browserima
      table.style.fontFamily = 'Arial, sans-serif';

      // CMTS header
      const headerRow = table.insertRow();
      const headerCell = headerRow.insertCell();
      headerCell.colSpan = 2;
      headerCell.textContent = `• ${cityName} CMTS: ${cmtsName}`;

      // Stilovi za CMTS naslov (uz levu ivicu)
      headerCell.style.fontWeight = 'bold';
      // Manji padding za naslov (5px levo)
      headerCell.style.padding = '8px 5px 8px 5px';
      headerCell.style.color = 'black';
      // headerCell.style.fontSize = '1rem';
      headerCell.style.textAlign = 'left';

      // Data rows
      groupedData[cityName][cmtsName].forEach((item, index) => {
        const row = table.insertRow();

        // ĆELIJA 1: INTERFEJS/NODE (Širina smanjena na 75% da bi se izbeglo sečenje u Firefoxu)
        const cell1 = row.insertCell();
        cell1.textContent = ' · ' + item.interfaceNode;
        cell1.style.width = '80%'; // Smanjena širina za sigurnost

        // Veći levi padding (25px) za uvlačenje u odnosu na naslov
        //cell1.style.padding = '5px 5px 5px 80px';
        cell1.style.textAlign = 'left';

        // ĆELIJA 2: SNR VREDNOST (20%)
        const cell2 = row.insertCell();
        cell2.textContent = item.snr;
        cell2.style.width = '20%';

        // Desni padding
        cell2.style.padding = '5px 15px 5px 5px';
        cell2.style.textAlign = 'right';
        cell2.style.fontWeight = 'bold';
        cell2.style.paddingLeft = '300px';
      });

      outputContainer.appendChild(table);
    }
  }

  document.getElementById('outputSection').style.display = 'block';
}

function copyAllTables() {
  const output = document.getElementById('outputTablesContainer');

  // Nema više kloniranja i ručnog dodavanja stilova!
  // Stilizovani HTML se preuzima direktno iz output-a.

  const range = document.createRange();
  range.selectNode(output);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

  try {
    document.execCommand('copy');
    Swal.fire({
      icon: 'success',
      title: 'Uspješno Kopiranje',
      text: 'Sadržaj je uspješno kopiran sa stilom.',
    });
  } catch {
    Swal.fire({
      icon: 'error',
      title: 'Greška',
      text: 'Kopiranje nije uspjelo.',
    });
  }

  sel.removeAllRanges();
}
