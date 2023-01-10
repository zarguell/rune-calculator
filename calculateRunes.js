function calculateRunes(runesNeeded, runesHave, availableRunes) {
  // Subtract the number of runes you already have from the number of runes needed
  runesNeeded -= runesHave;

  // Initialize the array to store the number of each type of golden runes needed
  const numGoldenRunes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // Calculate the number of each type of golden runes needed
  while (runesNeeded > 0) {
    if (runesNeeded >= 5000 && availableRunes[10] > 0) {
      numGoldenRunes[10]++;
      runesNeeded -= 5000;
      availableRunes[10]--;
    } else if (runesNeeded >= 3800 && availableRunes[9] > 0) {
      numGoldenRunes[9]++;
      runesNeeded -= 3800;
      availableRunes[9]--;
    } else if (runesNeeded >= 3000 && availableRunes[8] > 0) {
      numGoldenRunes[8]++;
      runesNeeded -= 3000;
      availableRunes[8]--;
    } else if (runesNeeded >= 2500 && availableRunes[7] > 0) {
      numGoldenRunes[7]++;
      runesNeeded -= 2500;
      availableRunes[7]--;
    } else if (runesNeeded >= 2000 && availableRunes[6] > 0) {
      numGoldenRunes[6]++;
      runesNeeded -= 2000;
      availableRunes[6]--;
    } else if (runesNeeded >= 1600 && availableRunes[5] > 0) {
      numGoldenRunes[5]++;
      runesNeeded -= 1600;
      availableRunes[5]--;
    } else if (runesNeeded >= 1200 && availableRunes[4] > 0) {
      numGoldenRunes[4]++;
      runesNeeded -= 1200;
      availableRunes[4]--;
    } else if (runesNeeded >= 800 && availableRunes[3] > 0) {
      numGoldenRunes[3]++;
      runesNeeded -= 800;
      availableRunes[3]--;
    } else if (runesNeeded >= 400 && availableRunes[2] > 0) {
      numGoldenRunes[2]++;
      runesNeeded -= 400;
      availableRunes[2]--;
    } else if (runesNeeded >= 200 && availableRunes[1] > 0) {
      numGoldenRunes[1]++;
      runesNeeded -= 200;
      availableRunes[1]--;
    } else if (availableRunes[0] > 0) {
      numGoldenRunes[0]++;
      runesNeeded -= 100;
      availableRunes[0]--;
    } else {
      // Return an empty array if there are not enough runes available
      return [];
    }
  }
  
  return numGoldenRunes;
}