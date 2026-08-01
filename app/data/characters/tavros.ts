import { Character, Weapon, Ability } from "../types";

export const tavros: Character = {
  profile: {
    name: "Tavros",
    portrait: "/portraits/tavros.png",
    species: "Zabrak",
    class: "Berserker",
    archetype: "Brawling Approach",
    level: 5,
    background: "Farmer",
    alignment: "Lawful Balanced",
    credits: 500,
    proficiencyBonus: 3,
    speed: 30,
    passivePerception: 10,
  },

  combat: {
    hp: {
      current: 53,
      max: 53,
      temporary: 0,

      hitDice: {
        current: 5,
        max: 5,
        die: "d12",
      },
    },

    armorClass: 15,
    initiative: 4,

    conditions: [],

    weapons: <Weapon[]>[
      {
        name: "Vibroblade",
        attackBonus: 5,
        damage: "1d8+2",
        damageType: "Kinetic",
        notes: "Versatile (1d10)",
      },

      {
        name: "Unarmed Strike",
        attackBonus: 5,
        damage: "3",
        damageType: "Kinetic",
        notes: "",
      },
    ],

    techPowers: [],
  },

  abilities: {
    strength: <Ability>{
      score: 15,
      modifier: 2,
      save: 5,
    },

    dexterity: {
      score: 18,
      modifier: 4,
      save: 4,
    },

    constitution: {
      score: 15,
      modifier: 2,
      save: 5,
    },

    intelligence: {
      score: 11,
      modifier: 0,
      save: 0,
    },

    wisdom: {
      score: 10,
      modifier: 0,
      save: 0,
    },

    charisma: {
      score: 9,
      modifier: -1,
      save: -1,
    },
  },

  skills: {
    athletics: 2,
    acrobatics: 4,
    sleightOfHand: 4,
    stealth: 4,

    investigation: 0,
    lore: 0,
    nature: 3,
    piloting: 0,
    technology: 0,

    animalHandling: 0,
    insight: 0,
    medicine: 0,
    perception: 0,
    survival: 0,

    deception: -1,
    intimidation: 2,
    performance: -1,
    persuasion: -1,
  },

  inventory: [
    {
      name: "Combat Suit",
      quantity: 1,
    },

    {
      name: "Vibroblade",
      quantity: 2,
    },
  ],

  biography:
    "A Zabrak berserker from Dathomir whose strength is matched only by his unwavering resolve. Raised as a farmer before taking up the life of a warrior, Tavros relies on instinct, discipline, and overwhelming force to protect those he fights beside.",
};