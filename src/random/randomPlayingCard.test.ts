import { describe, it, expect } from "@jest/globals";
import { randomBlackJackDeck } from "./randomPlayingCard";

describe(`randomParagraph`, () => {
  it(`no args`, () => {
    console.log(randomBlackJackDeck());
    expect(randomBlackJackDeck().length).toBe(52);
  });
});
