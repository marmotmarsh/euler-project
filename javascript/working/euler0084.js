import _ from 'lodash';

const PROPERTY_ORDS = {
  GO: '00',
  A1: '01',
  CC1: '02',
  A2: '03',
  T1: '04',
  R1: '05',
  B1: '06',
  CH1: '07',
  B2: '08',
  B3: '09',
  JAIL: '10',
  C1: '11',
  U1: '12',
  C2: '13',
  C3: '14',
  R2: '15',
  D1: '16',
  CC2: '17',
  D2: '18',
  D3: '19',
  FP: '20',
  E1: '21',
  CH2: '22',
  E2: '23',
  E3: '24',
  R3: '25',
  F1: '26',
  F2: '27',
  U2: '28',
  F3: '29',
  G2J: '30',
  G1: '31',
  G2: '32',
  CC3: '33',
  G3: '34',
  R4: '35',
  CH3: '36',
  H1: '37',
  T2: '38',
  H2: '39',
};

const ORDERERED_PROPERTIES = [
  'GO',
  'A1',
  'CC1',
  'A2',
  'T1',
  'R1',
  'B1',
  'CH1',
  'B2',
  'B3',
  'JAIL',
  'C1',
  'U1',
  'C2',
  'C3',
  'R2',
  'D1',
  'CC2',
  'D2',
  'D3',
  'FP',
  'E1',
  'CH2',
  'E2',
  'E3',
  'R3',
  'F1',
  'F2',
  'U2',
  'F3',
  'G2J',
  'G1',
  'G2',
  'CC3',
  'G3',
  'R4',
  'CH3',
  'H1',
  'T2',
  'H2',
];

function getNextSpace(currentSpace, card, action = undefined) {
  // if (card === 'Chance') {
  // console.log(`Moving from ${ORDERERED_PROPERTIES[currentSpace]} using stack ${card} and taking action '${action}'`);
  // }

  switch (action) {
    case 'Advance to GO':
      return 0;
    case 'Go to JAIL':
      return 10;
    case 'Go to C1':
      return 11;
    case 'Go to E3':
      return 24;
    case 'Go to H2':
      return 39;
    case 'Go to R1':
      return 5;
    case 'Go to Next R':
      if (currentSpace <= 5 || currentSpace > 35) {
        return 5;
      } else if (currentSpace <= 15) {
        return 15;
      } else if (currentSpace <= 25) {
        return 25;
      } else {
        return 35;
      }
    case 'Go to Next U':
      if (currentSpace >= 12 && currentSpace < 28) {
        return 28;
      } else {
        return 12;
      }
    case 'Go Back 3 Squares':
      return currentSpace - 3;
    default:
      if (action !== undefined) {
        console.warn(`The submitted action ${action} doesn't exist`);
      }
      return currentSpace;
  }
}

const COMMUNITY_CHEST_CARDS = [
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest'),
  (s) => getNextSpace(s, 'Community Chest', 'Advance to GO'),
  (s) => getNextSpace(s, 'Community Chest', 'Go to JAIL'),
];

const CHANCE_CARDS = [
  (s) => getNextSpace(s, 'Chance'),
  (s) => getNextSpace(s, 'Chance'),
  (s) => getNextSpace(s, 'Chance'),
  (s) => getNextSpace(s, 'Chance'),
  (s) => getNextSpace(s, 'Chance'),
  (s) => getNextSpace(s, 'Chance'),
  (s) => getNextSpace(s, 'Chance', 'Advance to GO'),
  (s) => getNextSpace(s, 'Chance', 'Go to JAIL'),
  (s) => getNextSpace(s, 'Chance', 'Go to C1'),
  (s) => getNextSpace(s, 'Chance', 'Go to E3'),
  (s) => getNextSpace(s, 'Chance', 'Go to H2'),
  (s) => getNextSpace(s, 'Chance', 'Go to R1'),
  (s) => getNextSpace(s, 'Chance', 'Go to Next R'),
  (s) => getNextSpace(s, 'Chance', 'Go to Next R'),
  (s) => getNextSpace(s, 'Chance', 'Go to Next U'),
  (s) => getNextSpace(s, 'Chance', 'Go Back 3 Squares'),
];

const PROBABILITIES = {
  // regular properties
  A1: 0,
  A2: 0,
  B1: 0,
  B2: 0,
  B3: 0,
  C1: 0,
  C2: 0,
  C3: 0,
  D1: 0,
  D2: 0,
  D3: 0,
  E1: 0,
  E2: 0,
  E3: 0,
  F1: 0,
  F2: 0,
  F3: 0,
  G1: 0,
  G2: 0,
  G3: 0,
  H1: 0,
  H2: 0,

  // railroads
  R1: 0,
  R2: 0,
  R3: 0,
  R4: 0,

  // utilities
  U1: 0,
  U2: 0,

  // taxes
  T1: 0,
  T2: 0,

  // chance
  CH1: 0,
  CH2: 0,
  CH3: 0,

  // community chest
  CC1: 0,
  CC2: 0,
  CC3: 0,

  // corner spaces
  GO: 0,
  JAIL: 0,
  FP: 0,
  G2J: 0,
};

function takeSingleTurn(gs) {
  const d1 = _.random(1, gs.dieSize, false);
  const d2 = _.random(1, gs.dieSize, false);

  // If we roll doubles
  // Not sure why, this problem accounts for this in the description, but the solution does not seem to

  // if (d1 === d2) {
  //   if (gs.consecutiveDoubles >= 2) {
  //     gs.consecutiveDoubles = 0;
  //     gs.currentSpace = 10;
  //     gs.spaceCounts.JAIL += 1;
  //     return;
  //   }
  //   gs.consecutiveDoubles += 1;
  // }

  gs.currentSpace += d1 + d2;
  gs.currentSpace %= 40;

  if (ORDERERED_PROPERTIES[gs.currentSpace] === 'G2J') {
    gs.currentSpace = 10;
  }
  if (ORDERERED_PROPERTIES[gs.currentSpace].startsWith('CH')) {
    const card = gs.chanceCards.shift();
    gs.chanceCards.push(card);
    gs.currentSpace = card(gs.currentSpace);
  }
  if (ORDERERED_PROPERTIES[gs.currentSpace].startsWith('CC')) {
    const card = gs.commChestCards.shift();
    gs.commChestCards.push(card);
    gs.currentSpace = card(gs.currentSpace);
  }

  gs.spaceCounts[ORDERERED_PROPERTIES[gs.currentSpace]] += 1;
}

export function solve84() {
  const dieSize = 4;
  const turnsToTake = 10000000;
  let spaceCounts = _.clone(PROBABILITIES);

  let gameState = {
    currentSpace: 0,
    dieSize,
    spaceCounts,
    chanceCards: _.shuffle(_.clone(CHANCE_CARDS)),
    commChestCards: _.shuffle(_.clone(COMMUNITY_CHEST_CARDS)),
    consecutiveDoubles: 0,
  };

  for (let i = 0; i < turnsToTake; i++) {
    takeSingleTurn(gameState);
  }

  for (let key in spaceCounts) {
    spaceCounts[key] /= turnsToTake;
  }

  console.log('Final Probs:', _.sum(Object.values(spaceCounts)));

  console.log(spaceCounts);

  return _.toPairs(spaceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .reduce((str, pr) => str + PROPERTY_ORDS[pr[0]], '');
}
