import { Coords } from "../types";
import { randomFloat } from "./randomFloat";

export const randomCoords = (): Coords => {
  return {
    lat: randomLat(),
    lng: randomLng(),
  };
};

export const randomLat = () => {
  return randomFloat(-90, 90);
};

export const randomLng = () => {
  return randomFloat(-180, 180);
};
