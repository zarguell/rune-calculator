function calculateRunes(numRunes, runesHave) {
  const goldenRunes = [200, 400, 800, 1200, 1600, 2000, 2500, 3000, 3800, 5000, 6250, 7500, 10000];
  const result = new Array(goldenRunes.length).fill(0);

  // Subtract the number of runes you already have from the number of runes needed
  numRunes -= runesHave;

  for (let i = goldenRunes.length - 1; i >= 0; i--) {
    while (numRunes >= goldenRunes[i]) {
      numRunes -= goldenRunes[i];
      result[i]++;
    }
  }

  return result;
}
