import { Character } from "./types";
import { sakii } from "./characters/sakii";
import { tavros } from "./characters/tavros";
import { mateo } from "./characters/mateo";
import { ronan } from "./characters/ronan";

export type User = {
  userName: string;
  character: Character;
};

export const users: User[] = [
  {
    userName: "Conner",
    character: sakii,
  },

  {
    userName: "Kyle",
    character: tavros,
  },

  {
    userName: "Cody",
    character: mateo,
  },

  {
    userName: "Cooper",
    character: ronan,
  },
];