import { Character, Weapon, Ability } from "../types";

export const sakii: Character = {
  profile: {
    name: "Sakii",
    portrait: "/portraits/sakii.png",
    species: "Kiffar",
    class: "Scout",
    archetype: "Stalker Technique",
    level: 5,
    background: "Survivor",
    alignment: "Lawful Balanced",
    credits: 500,
    proficiencyBonus: 3,
    speed: 30,
    passivePerception: 13,
  },

  combat: {
    hp: {
      current: 44,
      max: 44,
      temporary: 0,

      hitDice: {
        current: 5,
        max: 5,
        die: "d10",
      },
    },

    armorClass: 17,
    initiative: 5,

    conditions: [],

    weapons: <Weapon[]>[
      {
        name: "Sniper Rifle",
        attackBonus: 8,
        damage: "1d12+5",
        damageType: "Energy",
        notes: "Power Cell • Range 150/600 • Reload 2",
      },

      {
        name: "Lightbaton",
        attackBonus: 2,
        damage: "1d8+2",
        damageType: "Energy",
        notes: "Hidden • Light • Luminous",
      },

      {
        name: "Unarmed Strike",
        attackBonus: 5,
        damage: "3",
        damageType: "Kinetic",
        notes: "",
      },
    ],

    techPowers: [
      "Electroshock",
      "Ion Blast",
      "Jet of Flame",
      "Minor Defibrillation",
      "Detonator",
      "Echo Blast",
      "Mending",
    ],
  },

  abilities: {
    strength: <Ability>{
      score: 14,
      modifier: 2,
      save: 5,
    },

    dexterity: {
      score: 20,
      modifier: 5,
      save: 8,
    },

    constitution: {
      score: 15,
      modifier: 2,
      save: 2,
    },

    intelligence: {
      score: 18,
      modifier: 4,
      save: 4,
    },

    wisdom: {
      score: 16,
      modifier: 3,
      save: 3,
    },

    charisma: {
      score: 10,
      modifier: 0,
      save: 0,
    },
  },

  skills: {
    athletics: 2,
    acrobatics: 5,
    sleightOfHand: 5,
    stealth: 5,

    investigation: 4,
    lore: 4,
    nature: 4,
    piloting: 4,
    technology: 4,

    animalHandling: 3,
    insight: 3,
    medicine: 3,
    perception: 3,
    survival: 3,

    deception: 0,
    intimidation: 0,
    performance: 0,
    persuasion: 0,
  },

  inventory: [
    {
      name: "Fiber Armor",
      quantity: 1,
    },

    {
      name: "Sniper Rifle",
      quantity: 1,
    },

    {
      name: "Lightbaton",
      quantity: 2,
    },
  ],

  biography:
    "Left Kiffu shortly after turning 18 with the intention of becoming a bounty hunter. She eventually joined the crew after being rescued from a Pyke prison transport, earning her place through stealth and marksmanship.",
};