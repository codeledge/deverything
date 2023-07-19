import { describe, it, expect } from "@jest/globals";
import { randomBlackJackDeck } from "./randomPlayingCard";

describe(`randomParagraph`, () => {
  it(`no args`, () => {
    expect(randomBlackJackDeck().length).toBe(52);
  });
});
