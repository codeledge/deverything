export const PLAYING_CARD_SUITS = ["♠", "♥", "♦", "♣"];

export const BLACKJACK_CARDS = [
  { rank: "A", value: [1, 11] },
  { rank: "K", value: 10 },
  { rank: "Q", value: 10 },
  { rank: "J", value: 10 },
  { rank: "10", value: 10 },
  { rank: "9", value: 9 },
  { rank: "8", value: 8 },
  { rank: "7", value: 7 },
  { rank: "6", value: 6 },
  { rank: "5", value: 5 },
  { rank: "4", value: 4 },
  { rank: "3", value: 3 },
  { rank: "2", value: 2 },
];

export const BLACKJACK_DECK = BLACKJACK_CARDS.reduce(
  (deck, card) => {
    deck.push(...PLAYING_CARD_SUITS.map((suit) => ({ ...card, suit })));
    return deck;
  },
  [] as {
    rank: string;
    value: number | number[];
    suit: string;
  }[]
);
