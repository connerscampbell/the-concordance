import { Character, Weapon, Ability } from "../types";
import { techPowers } from "../powers/tech";

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

    powers: {
      type: "Tech",

      points: {
        current: 9,
        max: 9,
      },

      attackModifier: 7,
      saveDC: 15,

      known: [
        techPowers.electroshock,
        techPowers.ionBlast,
        techPowers.jetOfFlame,
        techPowers.minorDefibrillation,
        techPowers.detonator,
        techPowers.echoBlast,
        techPowers.mending,
      ],
    },
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

  proficiencies: {
    armor: [
      "Light Armor",
      "Medium Armor",
    ],
    weapons: [
      "Simple Blasters",
      "Martial Blasters",
      "Simple Vibroweapons",
      "Martial Vibroweapons",
    ],
    tools: [
      "Artisan's Implements",
      "Biotech Implements",
      "Brewer's Kit",
    ],
    languages: [
      "Galactic Basic",
    ],
  },

  features: {
    class: [
      { name: "Pathfinder" },
      { name: "Fighting Style" },
      { name: "Techcasting" },
      { name: "Accomplished Ambusher" },
      { name: "Mark of the Stalker" },
      { name: "Scout Routine" },
      { name: "Scout Technique" },
      { name: "Ability Score Improvement" },
      { name: "Extra Attack" },
    ],

    species: [],

    background: {
      name: "Heart of Darkness",
    },
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

  physical: {},

  personality: {},

  biography:
    "Left Kiffu shortly after turning 18 with the intention of becoming a bounty hunter. She eventually joined the crew after being rescued from a Pyke prison transport, earning her place through stealth and marksmanship.",
};