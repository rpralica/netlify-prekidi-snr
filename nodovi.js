'use strict';

const blicNodovi = [
  {
    ime: 'NOD broj 08',
    adresa: 'Federika Garsije Lorke 13',
    naselje: 'ROSULJE',
    ulice: [
      'Federika Garsije Lorke sva',
      'Petra Rađenovića sva',
      'Jovana Dučića 27-39 (neparna strana) i 46-78, 44a, 66',
      'Vuka Karadžića (Medicinska elektronika)',
      'Ranka Šipke 2-42(parna strana)',
      'Krajiških brigada 8-24 (parna strana)',
      'Petra Preradovića sva',
    ],
  },
  {
    ime: 'NOD broj 02',
    adresa: 'Ravnogorska 9',
    naselje: 'NOVA VAROŠ',
    ulice: [
      'Krajiških brigada 48-72 (parna strana)',
      'Slobodana Jovanovića sva',
      'Nedeljka Čabrinovića sva',
      'Srpskih pilota sva',
      'Njegoševa 1-43 (neparna strana) i 2,2a,-34 (parna strana)',
      'Milana Radmana neparna (7-25; 41-53; 57-61); parna (12-24; 68)',
      'Masarikova sva',
      'Pave Radana sva',
      'Dragiše Vasića sva',
      'Ravnogorska sva',
      'Stevana Mokranjca sva',
      'Tina Ujevića sva',
      'I Krajiškog korpusa 86-144',
      'Radoslava Lakića 34-44(parna strana)',
      'Ranka Miličevića sva',
      'XIV Srednjobosanske brigade 19,21,23',
      'Svetozara Markovića 1-9',
    ],
  },
  {
    ime: 'NOD broj 07',
    adresa: 'Srednjoškolska b.b.(Matchball)',
    naselje: 'ROSULJE',
    ulice: [
      'Knjaza Miloša 11,11a, 29a',
      'Šumadijska sva',
      'Branka Grbčića sva',
      'Srednjoškolska sva',
      'Dragana Bubića sva',
      'Ivana Gorana Kovačića 2-28 (parna strana)',
      'Mirjane Jotanović sva',
      'Marka Lipovca (dio ulice)',
      'Knjaza Miloša 31-77 (neparna strana)',
    ],
  },
  {
    ime: 'NOD broj 06',
    adresa: 'Majke Jugovića 25',
    naselje: 'STARČEVICA',
    ulice: ['Majke Jugovića 23, 25', 'Slobodana Kusturića 2-4'],
  },
  {
    ime: 'NOD broj 03',
    adresa: 'Trive Amelice 31',
    naselje: 'ROSULJE',
    ulice: [
      'Voždovačka 1-11 (neparna strana); 2-30 (parna strana)',
      'Trive Amelice 31-41 (neparna strana); 28-52 (parna strana)',
      'Kralja Petra II Karađorđevića 43-71 (neparna strana)',
      'Živojina Preradovića 1-29 (neparna strana) 10-26 (parna strana)',
      'Jaroslava Plecitija sva',
      'Rade Kondića 2, 2a, 2b',
    ],
  },
  {
    ime: 'NOD broj 04',
    adresa: 'Kralja Petra II 82',
    naselje: 'ROSULJE',
    ulice: [
      'Kralja Petra II Karađorđevića parna 26-106; neparna 19-41',
      'Lazarička sva',
      'V Kozarske brigade sva',
      'Manastira Moštanice sva',
      'Trive Amelice 1-29 (neparna strana); 2-24 (parna strana)',
      'Milana Stevilovića 1-7 (neparna strana); 2-6 (parna strana)',
      'Mladena Stojanovića 77-121 neparna; 12-28 parna',
      'Janka Veselinovića sva',
      'Bože Varićaka sva',
      'Bulevar srpske vojske 21',
    ],
  },
  {
    ime: 'NOD broj 09',
    adresa: 'Stojana Jankovića 27',
    naselje: 'LAZAREVO',
    ulice: [
      'Marka Lipovca (dio ulice)',
      'Petra Pecije sva',
      'Stojana Jankovića sva',
      'Braće Sola sva',
      'Alekse Dundića sva',
      'Šumadijska (dio ulice)',
      'Plitvička sva',
      'Vladimira Zvonara sva',
      'Ilije Smiljanića sva',
      'Kraljice Marije 1-57',
      'Marka Miljanova sva',
      'Jaroslava Hašeka sva',
      'Ivana Gorana Kovačića 161-207 (neparna strana)',
    ],
  },
  {
    ime: 'NOD broj 05',
    adresa: 'XIV Srednjobosanske brigade 20',
    naselje: 'NOVA VAROŠ',
    ulice: [
      'Radoslava Lakića 1-23(neparna strana) 2-30(parna strana)',
      'XIV Srednjobosanske brigade 1-19 i 25-61 neparna; 2-66 parna',
      'Milana Stevilovića 11-57 (neparna strana) 8-48 (parna strana)',
      'Stevana Markovića sva',
      'Mladena Stojanovića 9A-35',
      'Voždovačka 15-49 (neparna strana); 34-50 (parna strana)',
      'Milana Radmana 1-9; 35-55 (neparna strana); 2-10; 26-66 parna',
      'Kralja Petra ll 1-17 (neparna strana); 2-22, 34a, 34, 34 parna',
    ],
  },
  {
    ime: 'NOD broj 01',
    adresa: 'Tarasa Ševčenka 24',
    naselje: ' NOVA VAROŠ',
    ulice: [
      'Tarasa Ševčenka sva',
      'Petra Preradovića 16-28',
      'Slobodana Jovanovića 1-41 (neparna strana)',
      'Krajiških brigada 26-46 (parna strana)',
      'Svetozara Markovića 11-15 neparna; 10-20 parna',
      'Petra Kočića sva',
      'I Krajiškog korpusa sva 6-88',
    ],
  },
  {
    ime: 'NOD broj 16',
    adresa: 'Novosadska 20',
    naselje: 'PAPRIKOVAC',
    ulice: [
      'Novosadska sva',
      'Fruškogorska sva',
      'dr Velimira Čovića sva',
      'Leskovačka sva',
      'Dalibora Dače Stojića sva',
      'Natalije Jović sva',
      'Vojvođanska sva',
      'Davida Štrpca 2-58 parna; 1-61 neparna',
      'Vojvode Sinđelića 16-20',
      'Krajiških brigada (157-221)',
    ],
  },
  {
    ime: 'NOD broj 15',
    adresa: 'Njegoševa 90',
    naselje: 'PETRIĆEVAC',
    ulice: [
      'Njegoševa 135-141 (neparna strana); 86-92 (parna strana)',
      'Tromeđa 2, 2a, 2b, 2c, 2d, 2e, 4a, 4b, 4c, 4, 2-18',
      'Kralja Aleksandra l Karađorđevića 1-135 parna; 2-124 neparna',
      'dr Živka Nježića sva',
      'Banijska sva',
      'Rakovačkih rudara sva',
    ],
  },
  {
    ime: 'NOD broj 12',
    adresa: 'Ivana Kukuljevića 15',
    naselje: 'PETRIĆEVAC',
    ulice: [
      'Ivana Kukuljevića 1-33 (neparna strana); 2-28 (parna strana)',
      'Jovice Savinovića 1; 17c-37; 47-57-79-105 nep.; 2-20-68 par.',
      'Mladena Oljače sva',
      'Vase Kondića sva',
      'Njegoševa 45-81 (neparna strana); 40-50 (parna strana)',
      'Krajiških brigada 233-241 (neparna strana)',
      'Zore Kovačević 67-97 (neparna strana); 42-54 (parna strana)',
      'Majevička 15-21a; 23;23a neparna; 22-44 parna',
    ],
  },
  {
    ime: 'NOD broj 11',
    adresa: 'Ivana Kukuljevića 35',
    naselje: 'PETRIĆEVAC',
    ulice: [
      'Ivana Kukuljevića 33-39 (neparna strana); 30-36 (parna strana)',
      'Jovice Savinovića 107-191 neparna; 70-86 parna',
      'Šarplaninska sva',
      'Majevička 29-35a (neparna strana); 50-54 (parna strana)',
      'Vojvode Sinđelića 54-24-2a, 2-14-24-58 par.; 1-7; 33-39-47 nep.',
      'Davida Štrpca 82-100 (parna strana)',
    ],
  },
  {
    ime: 'NOD broj 14',
    adresa: 'Njegoševa 113',
    naselje: 'PETRIĆEVAC',
    ulice: [
      'Njegoševa 95-137 (neparna strana); 56-84 (parna strana)',
      'Bože Varićaka sva',
      'Rade Kondića 1c-27 (neparna strana); 4c-58 (parna strana)',
      'Miloša Crnjanskog sva',
      'Kralja Tvrtka Kotromanića sva',
      'Kupreška sva',
      'Ljubijskih rudara sva',
      'Milana Knežine sva',
      'Majevička 1-11c (neparna strana); 2a; 2-20 (parna strana)',
      'Marije Dimić sva',
      'Ivana Gorana Kovačića 3-97 neparna; 38-52a i Kafe “Mobil“',
      'Koste Abraševića sva',
    ],
  },
  {
    ime: 'NOD broj 18',
    adresa: 'Jovana Raškovića 143a (Vidik)',
    naselje: 'PAPRIKOVAC',
    ulice: [
      'Jovana Raškovića 43-201; 205-229 neparna; 138-182 parna',
      'Ljevčanska sva',
      'Koste Krsmanovića 1-21 (neparna strana); 2-16 (parna strana)',
      'Koste Majkića sva',
    ],
  },
  {
    ime: 'NOD broj 20',
    adresa: 'Crkvena',
    naselje: 'LAUŠ',
    ulice: [
      'Svetog Nikole sva',
      'Užička sva',
      'Crkvena sva',
      'Drvarska 1, 3, 5, 15, 13a nep.; parna 2, 4, 6, 14a, 22, 23, 24',
      'Karađorđeva 227; 229; 239-277 neparna; 136-294 parna',
      'Svetog Nikole 1-9 (neparna strana); 2-12 (parna strana)',
      'Srpskih sokolova (1-9)',
      'Vida Simurdžića sva',
      'Sanska sva',
    ],
  },
  {
    ime: 'NOD broj 21',
    adresa: 'Bogdana Žerajića 34',
    naselje: 'LAUŠ',
    ulice: [
      'Karađorđeva 307-319 (neparna strana); 296-362 (parna strana)',
      'Bogdana Žerajića 7-11 (neparna strana); 16-36a (parna strana)',
      'Vladike Varnave Nastića 1-41 neparna; 2-36 parna',
      'Relje Kneževića sva',
      'Koste Krsmanovića 23-33 (neparna strana); 20-24 (parna strana)',
      'Jovana Raškovića 203; 203a',
      'Vlašićka 1-77 (neparna strana); 2-62 (parna strana)',
      'Srpskih rudara 1-7; 27-53 neparna; 44-54; 70-78; 82-102 parna',
      'Bose Živković 6-18; 20a; 84; 96-132 parna; 47-49 neparna',
    ],
  },
  {
    ime: 'NOD broj 17',
    adresa: 'Zelengorska 11',
    naselje: 'PAPRIKOVAC',
    ulice: [
      'Ranka Šipke 3;7-11( neparna strana); 15, 29 su na RF-u',
      'Zelengorska 1-23 (neparna strana); 2a;2b (parna strana)',
      'Moslovačka 1-11 (neparna strana); 2-6b (parna strana)',
      'Ilije Grbića sva',
      'Igmanska 1; 1a, 3, 5, 2; 4; 6; 8',
      'Krajiških brigada 69-113 (neparna strana) +113a',
      'Maksima Gorkog 2-100',
      'Krajiška sva',
      'Nikole Bokana sva',
    ],
  },
  {
    ime: 'NOD broj 22',
    adresa: 'Darka Jakmirovića 3',
    naselje: 'LAUŠ',
    ulice: [
      'Darka Jakmirovića sva',
      'Despota Konstantina Dragaša sva',
      'Jovanke Gajić Zmijanjke sva',
      'Bose Živković 2-4; 20-96 (parna strana); 1-45 (neparna strana)',
      'Karađorđeva 321-439 (neparna strana); 364-386 (parna strana)',
      'Velebitska sva',
      'Dušana i Vlade Kopanje 1-105 neparna; 2-30 parna',
      'Vladike Varnave Nastića 43-111 neparna; 38-48 parna',
    ],
  },
  {
    ime: 'NOD broj 13',
    adresa: 'Zore Kovačević 26',
    naselje: 'PETRIĆEVAC',
    ulice: [
      'Ljubice Mrkonjić sva',
      'Jovice Savinovića 16,16a, 18, 16g, 43a, 39a, 16b, 16e',
      'Mladena Oljače sva',
      'Majevička neparna strana 15-23; parna strana 18-42',
      'Branislava Nušića sva',
      'Zore Kovačević 8-40a; parna; neparna strana 9-75-99',
      'Eugena Kumičića sva',
    ],
  },
  {
    ime: 'NOD broj 39',
    adresa: 'Federika Garsije Lorke 13',
    naselje: 'DRAGOČAJ',
    ulice: ['Svi korisnici se vode kao Dragočaj bb'],
  },
  {
    ime: 'NOD broj 19',
    adresa: 'Jovana Raškovića 41 (Borovnica)',
    naselje: 'LAUŠ',
    ulice: [
      'Karađorđeva 66-134 parna strana',
      'Alekse Šantića sva',
      'Božidara Miće Babića sva',
      'Drvarska neparna strana (17-29)',
      'Jovana Raškovića neparna strana (3-41); parna strana (40-62)',
      'Milorada Umljenovića sva',
      'Petrovačka sva',
      'Petra Mećave sva',
    ],
  },
  {
    ime: 'NOD broj 25',
    adresa: 'Priječani bb (Priječani-Ljevari)',
    naselje: 'ROSULJE',
    ulice: [
      'Hilandarska sva',
      'Jurija Gagarina sva',
      'Danila Bate Stojkovića sva',
      'Laze Kostića sva',
      'Petra Kralja sva',
      'Gogoljeva sva',
      'Kneza Mihajla Obrenovića sva',
      'Novogradska sva',
      'Dragačevska sva',
      'Zorana Radmilovića sva',
      'Puškinova sva',
      'Ruska sva',
      'Duška Radovića sva',
      'Laze Lazarevića sva',
      'Ljutice Bogdana sva',
      '9. januara sva',
      'Radnička sva',
      'Jovana Sterije Popovića sva',
    ],
  },
  {
    ime: 'NOD broj 26',
    adresa: 'Priječani 2 (Grmuša Mont)',
    naselje: 'PRIJEČANI',
    ulice: ['Brusina sva', 'Rodoljuba Čolakovića sva'],
  },
  {
    ime: 'NOD broj 27',
    adresa: 'Kors',
    naselje: 'STARČEVICA',
    ulice: [
      'Koste Jarića 35, 35a, 35b',
      'dr Vojislava Đede Kecmanovića 2D i 2E',
    ],
  },
  {
    ime: 'NOD broj 28',
    adresa: 'Vladislava Skarića',
    naselje: 'POSLOVNA ZONA - INCEL - ADA',
    ulice: [
      'Vladislava Skarića sva',
      'Petra Velikog sva',
      'Braće i sestara Oljača sva',
      'Ivana Milutinovića sva',
      'Vjenceslava Novaka sva',
      'Sestara Levi sva',
    ],
  },
  {
    ime: 'NOD broj 29',
    adresa: 'NOD Petra Velikog',
    naselje: 'ČESMA',
    ulice: [
      'Sarajevska sva',
      'Lava Nikolajeviča Tolstoja sva',
      'I Krajiškog proleterskog bataljona sva',
      'Zdravka Dejanovića sva',
    ],
  },
  {
    ime: 'NOD broj 30',
    adresa: 'Đurđevdanska 11',
    naselje: 'VRBANJA',
    ulice: [
      'Veljka Mlađenovića sva',
      'Stanka Božića Kobre sva',
      'Carigradska sva',
      'Rade Radića sva',
      'Đurđevdanska sva',
      'Jovanjdanska sva',
    ],
  },
  {
    ime: 'NOD broj 46',
    adresa: 'JKC',
    naselje: 'VENECIJA MOST',
    ulice: ['Gavre Vučkovića'],
  },
  {
    ime: 'NOD broj 45',
    adresa: 'Carice Milice',
    naselje: 'Dvorana OBILIĆEVO',
    ulice: ['Carice Milice 11a'],
  },
  {
    ime: 'NOD broj 37',
    adresa: 'Pavlovac',
    naselje: 'PAVLOVAC',
    ulice: [
      'Đure Damjanovića',
      'Krndije',
      'Božurska',
      'Trebinjska',
      'Lipljanska',
      'Ozrenska',
      'Ravanička',
      'Prnjavor mali',
    ],
  },
  {
    ime: 'NOD broj 38',
    adresa: 'Pavlovac (Đurđevići)',
    naselje: 'PAVLOVAC',
    ulice: ['Pavlovac bb'],
  },
  {
    ime: 'NOD broj 40',
    adresa: 'Zeleni Vir',
    naselje: 'DEBELJACI',
    ulice: ['Jovana Kršića'],
  },
  {
    ime: 'NOD broj 32',
    adresa: 'Vida Nježića',
    naselje: 'ADA - DEBELJACI',
    ulice: ['Vida Nježića', 'Siniše Mijatovića'],
  },

  {
    ime: 'NOD broj 50',
    adresa: 'Novakovići',
    naselje: 'TUNJICE',
    ulice: ['Jovana Bijelića'],
  },
  {
    ime: 'NOD broj 44',
    adresa: 'MM Home',
    naselje: 'ADA - MEDENO POLJE',
    ulice: ['Ada 11'],
  },
  {
    ime: 'NOD broj 43',
    adresa: 'Poljskog partizanskog bataljona',
    naselje: 'LAZAREVO',
    ulice: ['Svetozara Cvijetojevića'],
  },

  {
    ime: 'NOD broj 49',
    adresa: 'Sinđelić',
    naselje: 'MAĐIR',
    ulice: ['Zdravka Dejanovića', 'Ničija ulica'],
  },

  {
    ime: 'NOD broj 53',
    adresa: 'Rosulje',
    naselje: 'ROSULJE',
    ulice: ['Kralja Petra II Karađorđevića 75-do kraja ulice'],
  },

  {
    ime: 'NOD broj 54',
    adresa: 'Red Brick',
    naselje: 'STARČEVICA',
    ulice: ['Slobodana Kusturića 6-8'],
  },

  {
    ime: 'NOD broj 47',
    adresa: 'Estetik',
    naselje: 'HOTEL BOSNA',
    ulice: ['Vidovdanska 2-4'],
  },

  {
    ime: 'NOD broj 42',
    adresa: 'Debeljaci',
    naselje: 'DEBELJACI',
    ulice: [
      'Tešana Podrugovića',
      'Debeljaci bb',
      'Arčibalda Rajsa',
      'Ponirska',
    ],
  },

  {
    ime: 'NOD broj 24',
    adresa: 'Nenada Kostića',
    naselje: 'ZALUŽANI',
    ulice: ['Nenada Kostića', 'Blagoja Parovića (Vujinovići)'],
  },

  {
    ime: 'NOD broj 41',
    adresa: 'Motike',
    naselje: 'MOTIKE',
    ulice: ['Motike bb'],
  },

  {
    ime: 'NOD broj 36',
    adresa: 'Drakulić',
    naselje: 'DRAKULIĆ',
    ulice: [
      'Đurđa Glamočanina',
      'Đulija',
      'Kneževska',
      'Manjačka',
      'Lovćenska',
    ],
  },

  {
    ime: 'NOD broj 33',
    adresa: 'Šargovac crkva',
    naselje: 'ŠARGOVAC',
    ulice: ['Šargovačka ulica'],
  },

  {
    ime: 'NOD broj 34',
    adresa: 'Šargovac škola',
    naselje: 'ŠARGOVAC',
    ulice: ['Subotička', 'Bilećka', 'Nova ulica', 'Mala ulica'],
  },

  {
    ime: 'NOD broj 48',
    adresa: 'Ivana Gorana Kovačića',
    naselje: 'ROSULJE',
    ulice: [
      'Miće Ljubibratića 2-12 (parna strana)',
      'Ivana Gorana Kovačića 125-159(neparna strana)',
      'Mlađe Ćusića parna strana (2-14); neparna strana (1-9)',
    ],
  },
  {
    ime: 'NOD broj 23',
    adresa: 'Kuljani bb',
    naselje: 'KULJANI',
    ulice: ['Kuljani'],
  },
  {
    ime: 'NOD broj 52',
    adresa: 'Stadion',
    naselje: 'CENTAR',
    ulice: [
      'Vladike Platona sva',
      'Aleja Svetog Save 15-29, 37, 57, javna garaža, dvorana Borik',
      'Karitas Biskupija',
      'Restoran „Mala stanica“',
    ],
  },
  {
    ime: 'NOD broj 31',
    adresa: 'Dujke Komljenovića',
    naselje: 'VRBANJA',
    ulice: ['Dujke Komljenovića'],
  },
  {
    ime: 'NOD broj 35',
    adresa: 'Mlađe Ćusića br. 2',
    naselje: 'DRAKULIĆ',
    ulice: [
      'Rakovačke bare sva',
      'Karanovića sva',
      'Vojna sva',
      'Goluba Babića od broja 18',
      'Bitoljska',
      'Mlađe Ćusića neparni brojevi od 11',
    ],
  },
  {
    ime: 'NOD broj 10',
    adresa: 'Branka Popovića 13 - ARS ZGRADA',
    naselje: 'LAZAREVO',
    ulice: ['Despota Stefana Lazarevića sva', 'Branka Popovića neparna strana'],
  },
  {
    ime: 'NOD broj 51',
    adresa: 'RF signal- Centrala Netkom',
    naselje: 'PAPRIKOVAC',
    ulice: [
      'Igmanska 7-19, parna 12-24',
      'Rade Marjanca 2-14; 1-7 neparna na RF-u',
      'Romanijska',
      'Moslovačka 6, 8, 10, 12, 13, 14, 16, 15, 17, 19, 29, 21, 23 - RF',
      'Ranka Šipke 40-80, 5, 15-31',
      'Krajiških brigada 115-153c',
    ],
  },
];

/* 
SORTIRANJE PODATAKA U OBJKTU


Objekat je bio 'nabacan' i ružno se prikazivao u select elementu
pa ga je bilo potrebno sortirati.U ovom slučaju kada podaci stižu
iz objekta nije bilo moguće sortirati select element jer se dobijaju 
netačni podaci pa je bilo potrebno sortirati objekat
*/

blicNodovi.sort((a, b) => a.ime.localeCompare(b.ime));

//Deklaracija elemenata

const selBlic = document.getElementById('selBlic');
const vals = Object.values(blicNodovi);
const blicNod = document.getElementById('blicNod');

// Popunjavanje select elementa automatski i ova radnja se dešava prilikom
//učitavanje stranice

function populateBlic() {
  for (let i = 0; i < vals.length; i++) {
    const el = `
    <option class="form-control " value="${i}" > ${vals[i].ime} - ${vals[i].adresa} </option>
    `;
    selBlic.insertAdjacentHTML('beforeend', el);
  }
}

/*Change event je isti kao i click ali pošto je namjena da se aplikacija
 konvertuje u apk aplikaciju onda prilikom klika promjena se dešava tek kasnije
dok se kod change eventa promjena dešava odmah.
*/


selBlic.addEventListener('change', function (e) {
  e.preventDefault();
 
  blicNod.innerHTML = '';
  renderBlic();
  searchInput.value=''
  document.getElementById('h').classList.add('hidden');
});

populateBlic(); //Popunjavanje select elementa

//Funkcija za popunjavanje podataka iz objekta i smještanje u div element
function renderBlic() {
  var ind = document.getElementById('selBlic').selectedIndex;
  const nod = `
<h3 class="text-center text-dark fw-bold shd bg-light"><strong>${vals[ind].ime}</strong></h3>
<br>
<div class="container-fluid">

    <ul class="list-group  shd rounded">
        <li class="list-group-item"><strong>Adresa: </strong> ${vals[ind].adresa}</li>
        <li class="list-group-item"><strong>Naselje: </strong> ${vals[ind].naselje}</li>
        <li class="list-group-item"><strong>Ulice: </strong> ${vals[ind].ulice}</li>
    </ul>
    <br>
</div>
`;
  blicNod.insertAdjacentHTML('beforeend', nod); //Insertovanje elementa u div element
}
// Pretraga ulice

const searchInput = document.getElementById('inpBlicSearch');
searchInput.focus(); //Fokusiranje polja za upis pretrage

searchInput.addEventListener('input', function (e) {
  e.preventDefault();

  blicNod.innerHTML = '';
  searchStreets();
  document.getElementById('h').classList.remove('hidden');
});

function searchStreets() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredResults = blicNodovi.filter(
    item =>
      item.ime.toLowerCase().includes(searchTerm) ||
      item.ulice.some(book => book.toLowerCase().includes(searchTerm))
  );

  displayResults(filteredResults, searchTerm);
  txtCount.textContent =
    searchInput.value === '' ? ` 0 ` : ` ${filteredResults.length} `;
}

const txtCount = document.getElementById('txtCount');
blicNodovi.sort((a, b) => a.ime.localeCompare(b.ime));

function displayResults(results, searchTerm) {
  blicNod.innerHTML = '';

  results.forEach(result => {
    const divEl = document.createElement('div');
    divEl.className = 'result-item';

    const highlightedBooks = result.ulice.map(ulica =>
      highlightSearchTerm(ulica, searchTerm)
    );

    divEl.innerHTML = `


<div class="container-fluid">
<h2 class="list-group-item text-center tshd fw-bold text-light"><strong ></strong> ${result.ime}</h2>
<br>
<ul class="list-group shd rounded">
  <li class="list-group-item"><strong>Adresa:${result.adresa} </strong></li> 
  <li class="list-group-item"><strong>Naselje: ${result.naselje}</strong></li>
  <li class="list-group-item "><strong>Ulice: </strong>${highlightedBooks}  </li>
</ul>
<br>
</div>
`;

    blicNod.appendChild(divEl);
  });
}

function highlightSearchTerm(text, searchTerm) {
  const regex = new RegExp(searchTerm, 'gi');
  return text.replace(
    regex,
    match => `<span class="highlight">${match}</span>`
  );
}
