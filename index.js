const macOzeti = (evSahibiTakim, deplasmanTakimi) => {
  let sonuc = [];

  let evSahibiSkor = 0;
  let deplasmanSkor = 0;

  for (let i = 1; i <= 4; i++) {
    let rastgele1 = Math.floor(Math.random() * (26 - 12 + 1)) + 12;
    let rastgele2 = Math.floor(Math.random() * (26 - 12 + 1)) + 12;

    evSahibiSkor += rastgele1;
    deplasmanSkor += rastgele2;

    sonuc.push(
      `${i} Periyot: ${evSahibiTakim} ${rastgele1} - ${deplasmanTakimi} ${rastgele2}`
    );
  }
  if (evSahibiSkor === deplasmanSkor) {
    sonuc.push(`Maç ${evSahibiSkor} - ${deplasmanSkor} ile uzatmalara gitti`);
  } else if (evSahibiSkor > deplasmanSkor) {
    sonuc.push(
      `Maç Sonucu: ${evSahibiTakim} ${evSahibiSkor} - ${deplasmanSkor} kazandı`
    );
  } else {
    sonuc.push(
      `Maç Sonucu: ${evSahibiTakim} ${evSahibiSkor} - ${deplasmanSkor} kaybetti`
    );
  }

  return sonuc;
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = macOzeti;
