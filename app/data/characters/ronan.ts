import { Character, Weapon, Ability } from "../types";

export const ronan: Character = {
  profile: {
    name: "Ronan",
    portrait: "/portraits/ronan.png",
    species: "Human",
    class: "Operative",
    archetype: "Maverick Practice",
    level: 5,
    background: "Force Adept",
    alignment: "Chaotic Light",
    credits: 400,
    proficiencyBonus: 3,
    speed: 30,
    passivePerception: 14,
  },

  combat: {
    hp: {
      current: 43,
      max: 43,
      temporary: 0,

      hitDice: {
        current: 5,
        max: 5,
        die: "d8",
      },
    },

    armorClass: 15,
    initiative: 3,

    conditions: [],

    weapons: <Weapon[]>[
      {
        name: "Vibrodagger",
        attackBonus: 7,
        damage: "1d4+4",
        damageType: "Kinetic",
        notes: "Finesse • Light • Vibro",
      },

      {
        name: "Lightfoil",
        attackBonus: 7,
        damage: "1d8+4",
        damageType: "Energy",
        notes: "Finesse • Defensive",
      },

      {
        name: "Heavy Blaster Pistol",
        attackBonus: 7,
        damage: "1d8+4",
        damageType: "Energy",
        notes: "Range 40/160 • Reload 16",
      },
    ],

    techPowers: [
      "Battle Precognition",
      "Force Push/Pull",
      "Mind Trick",
      "Saber Reflect",
    ],
  },

  abilities: {
    strength: <Ability>{
      score: 10,
      modifier: 0,
      save: 0,
    },

    dexterity: {
      score: 18,
      modifier: 4,
      save: 7,
    },

    constitution: {
      score: 14,
      modifier: 2,
      save: 2,
    },

    intelligence: {
      score: 12,
      modifier: 1,
      save: 1,
    },

    wisdom: {
      score: 16,
      modifier: 3,
      save: 6,
    },

    charisma: {
      score: 14,
      modifier: 2,
      save: 2,
    },
  },

  skills: {
    athletics: 0,
    acrobatics: 7,
    sleightOfHand: 7,
    stealth: 7,

    investigation: 4,
    lore: 1,
    nature: 1,
    piloting: 4,
    technology: 1,

    animalHandling: 3,
    insight: 6,
    medicine: 3,
    perception: 6,
    survival: 3,

    deception: 5,
    intimidation: 2,
    performance: 2,
    persuasion: 5,
  },

  inventory: [
    {
      name: "Fiber Armor",
      quantity: 1,
    },

    {
      name: "Heavy Blaster Pistol",
      quantity: 1,
    },

    {
      name: "Lightfoil",
      quantity: 1,
    },

    {
      name: "Vibrodagger",
      quantity: 2,
    },
  ],

  biography:
    "Raised with an awareness of the Force but outside the formal Jedi Order, Ronan developed his own methods of blending instinct, agility, and precision. He now travels with the crew, relying on both his training and his connection to the Force to stay one step ahead of his enemies.",
};