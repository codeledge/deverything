import {
  BLACKJACK_CARDS,
  BLACKJACK_DECK,
  PLAYING_CARD_SUITS,
} from "../constants/playingCards";
import { shuffle } from "../helpers/shuffle";
import { randomArrayItem } from "./randomArrayItem";

export const randomPlayingCardSuit = () => {
  return randomArrayItem(PLAYING_CARD_SUITS);
};

export const randomBlackJackCard = () => {
  return randomArrayItem(BLACKJACK_CARDS);
};

export const randomBlackJackDeck = () => {
  return shuffle(BLACKJACK_DECK);
};
