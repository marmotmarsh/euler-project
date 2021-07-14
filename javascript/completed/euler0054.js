import fs from 'fs';
import _ from 'lodash';

const SUITS = {
  C: 'Club',
  D: 'Diamond',
  H: 'Heart',
  S: 'Spade',
};

const VALUES = {
  2: { value: 'Two', rank: 2 },
  3: { value: 'Three', rank: 3 },
  4: { value: 'Four', rank: 4 },
  5: { value: 'Five', rank: 5 },
  6: { value: 'Six', rank: 6 },
  7: { value: 'Seven', rank: 7 },
  8: { value: 'Eight', rank: 8 },
  9: { value: 'Nine', rank: 9 },
  T: { value: 'Ten', rank: 10 },
  J: { value: 'Jack', rank: 11 },
  Q: { value: 'Queen', rank: 12 },
  K: { value: 'King', rank: 13 },
  A: { value: 'Ace', rank: 14 },
};

const HIGH_CARD = 'High Card';
const ONE_PAIR = 'One Pair';
const TWO_PAIRS = 'Two Pairs';
const THREE_OF_A_KIND = 'Three of a Kind';
const STRAIGHT = 'Straight';
const FLUSH = 'Flush';
const FULL_HOUSE = 'Full House';
const FOUR_OF_A_KIND = 'Four of a Kind';
const STRAIGHT_FLUSH = 'Straight Flush';
const ROYAL_FLUSH = 'Royal Flush';

const HAND_RANKS = {
  [HIGH_CARD]: 1,
  [ONE_PAIR]: 2,
  [TWO_PAIRS]: 3,
  [THREE_OF_A_KIND]: 4,
  [STRAIGHT]: 5,
  [FLUSH]: 6,
  [FULL_HOUSE]: 7,
  [FOUR_OF_A_KIND]: 8,
  [STRAIGHT_FLUSH]: 9,
  [ROYAL_FLUSH]: 10,
};

class Card {
  constructor(card) {
    this.suit = SUITS[card[1]];
    this.value = VALUES[card[0]].value;
    this.rank = VALUES[card[0]].rank;
  }

  getSuit() {
    return this.suit;
  }
  getRank() {
    return this.rank;
  }
  getValue() {
    return this.value;
  }
}

class Hand {
  constructor(cards) {
    this.cards = cards.map((c) => new Card(c)).sort((a, b) => a.getRank() - b.getRank());
    this.determineHandValue();
  }

  determineHandValue() {
    const { cards } = this;
    const cardValues = cards.map((c) => c.getRank());
    const cardSuits = cards.map((c) => c.getSuit());

    let result = {
      hand: undefined,
      prio1: undefined,
      prio2: undefined,
      prio3: undefined,
      prio4: undefined,
      prio5: undefined,
    };

    if (cardValues.length === _.uniq(cardValues).length) {
      result.prio1 = cards[4].getRank();
      result.prio2 = cards[3].getRank();
      result.prio3 = cards[2].getRank();
      result.prio4 = cards[1].getRank();
      result.prio5 = cards[0].getRank();

      if (
        cards[0].getRank() + 1 === cards[1].getRank() &&
        cards[1].getRank() + 1 === cards[2].getRank() &&
        cards[2].getRank() + 1 === cards[3].getRank() &&
        cards[3].getRank() + 1 === cards[4].getRank()
      ) {
        if (_.uniq(cardSuits).length === 1) {
          if (cards[0].getValue() === 'Ten') {
            result.hand = ROYAL_FLUSH;
          } else {
            result.hand = STRAIGHT_FLUSH;
          }
        } else {
          result.hand = STRAIGHT;
        }
      } else {
        if (_.uniq(cardSuits).length === 1) {
          // 424
          result.hand = FLUSH;
        } else {
          result.hand = HIGH_CARD;
        }
      }
    } else {
      const grouped = _.groupBy(cards, (c) => c.getRank());

      const maybeFour = Object.values(grouped).filter((v) => v.length === 4);
      const maybeThree = Object.values(grouped).filter((v) => v.length === 3);
      const maybeTwo = Object.values(grouped).filter((v) => v.length === 2);
      const maybeOne = Object.values(grouped).filter((v) => v.length === 1);

      if (maybeFour.length) {
        result.hand = FOUR_OF_A_KIND;
        result.prio1 = maybeFour[0][0].getRank();
        result.prio2 = maybeOne[0][0].getRank();
      } else if (maybeThree.length) {
        result.prio1 = maybeThree[0][0].getRank();

        if (maybeTwo.length) {
          result.hand = FULL_HOUSE;
          result.prio2 = maybeTwo[0][0].getRank();
        } else {
          result.hand = THREE_OF_A_KIND;
          result.prio2 = maybeOne[1][0].getRank();
          result.prio3 = maybeOne[0][0].getRank();
        }
      } else {
        if (maybeTwo.length === 2) {
          result.hand = TWO_PAIRS;
          result.prio1 = maybeTwo[1][0].getRank();
          result.prio2 = maybeTwo[0][0].getRank();
          result.prio3 = maybeOne[0][0].getRank();
        } else {
          result.hand = ONE_PAIR;
          result.prio1 = maybeTwo[0][0].getRank();
          result.prio2 = maybeOne[2][0].getRank();
          result.prio3 = maybeOne[1][0].getRank();
          result.prio4 = maybeOne[0][0].getRank();
        }
      }
    }

    return result;
  }

  isOwnBetter(hand) {
    const thisHand = this.determineHandValue();
    const thatHand = hand.determineHandValue();

    if (thisHand.hand !== thatHand.hand) {
      return HAND_RANKS[thisHand.hand] > HAND_RANKS[thatHand.hand];
    }
    if (thisHand.prio1 !== thatHand.prio1) {
      return thisHand.prio1 > thatHand.prio1;
    }
    if (thisHand.prio2 !== thatHand.prio2) {
      return thisHand.prio2 > thatHand.prio2;
    }
    if (thisHand.prio3 !== thatHand.prio3) {
      return thisHand.prio3 > thatHand.prio3;
    }
    if (thisHand.prio4 !== thatHand.prio4) {
      return thisHand.prio4 > thatHand.prio4;
    }
    return thisHand.prio5 > thatHand.prio5;
  }
}

export function solve54() {
  const file = fs.readFileSync('./data/x0054.txt', {
    encoding: 'utf-8',
  });
  const lines = file.split('\n');

  let player1Wins = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const allCards = line.split(' ');
    const hand1 = new Hand(allCards.slice(0, 5));
    const hand2 = new Hand(allCards.slice(5));

    if (hand1.isOwnBetter(hand2)) {
      player1Wins.push(i + 1);
    }
  }

  return player1Wins.length;
}
