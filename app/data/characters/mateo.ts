import { Character, Weapon, Ability } from "../types";

export const mateo: Character = {
  profile: {
    name: "Mateo Wren",
    portrait: "/portraits/mateo.png",
    species: "Chiss",
    class: "Fighter",
    archetype: "Assault Specialist",
    level: 5,
    background: "Mandalorian",
    alignment: "Chaotic Light",

    experience: 6500,
    nextLevelExperience: 14000,

    credits: 380,
    proficiencyBonus: 3,
    speed: 30,
    passivePerception: 10,
  },

  combat: {
    hp: {
      current: 47,
      max: 47,
      temporary: 0,

      hitDice: {
        current: 5,
        max: 5,
        die: "d10",
      },
    },

    armorClass: 16,
    initiative: 2,

    conditions: [],

    weapons: <Weapon[]>[
      {
        name: "Light Assault Blaster",
        attackBonus: 0,
        attackModifier: "DEX",
        damage: "2d6+2",
        damageType: "Energy",
        notes:
          "Range 50/200 • Power Cell • Reload 16 • Brute Force: +1d6 Energy once per turn",
      },

      {
        name: "Beskar Glaive",
        attackBonus: 0,
        attackModifier: "STR",
        damage: "1d10+4",
        damageType: "Slashing",
        notes:
          "Brutal 1 • Dexterity 13 • Luminous • Reach • Two-Handed • Brute Force: +1d6 Slashing once per turn",
      },

      {
        name: "Unarmed Strike",
        attackBonus: 5,
        attackModifier: "STR",
        damage: "3",
        damageType: "Kinetic",
        notes: "",
      },
    ],

    powers: {
      type: "Tech",

      points: {
        current: 0,
        max: 0,
      },

      known: [],
    },
  },

  abilities: {
    strength: <Ability>{
      score: 14,
      modifier: 2,
      save: 5,
    },

    dexterity: {
      score: 14,
      modifier: 2,
      save: 2,
    },

    constitution: {
      score: 12,
      modifier: 1,
      save: 4,
    },

    intelligence: {
      score: 17,
      modifier: 3,
      save: 3,
    },

    wisdom: {
      score: 10,
      modifier: 0,
      save: 0,
    },

    charisma: {
      score: 10,
      modifier: 0,
      save: 0,
    },
  },

  skills: {
    athletics: 5,
    acrobatics: 2,
    sleightOfHand: 2,
    stealth: 2,

    investigation: 3,
    lore: 3,
    nature: 3,
    piloting: 3,
    technology: 3,

    animalHandling: 0,
    insight: 0,
    medicine: 0,
    perception: 0,
    survival: 0,

    deception: 0,
    intimidation: 0,
    performance: 0,
    persuasion: 0,
  },

  proficiencies: {
    armor: ["All Armor"],

    weapons: [
      "All Blasters",
      "All Vibroweapons",
    ],

    tools: [
      "One Set of Artisan's Implements",
    ],

    languages: [
      "Galactic Basic",
    ],
  },

  features: {
    class: [
      { name: "Fighting Style" },
      { name: "Second Wind" },
      { name: "Action Surge" },
      { name: "Combat Superiority" },
      { name: "Fighter Specialty" },
      { name: "Fighter Strategies" },
      { name: "Ability Score Improvement" },
      { name: "Extra Attack" },
      { name: "Ability Score Increase" },
    ],

    species: [],

    background: {
      name: "Child of Mandalore",
    },
  },
    inventory: [
    {
      name: "Beskar Weave Armor",
      quantity: 1,
    },

    {
      name: "Light Assault Blaster",
      quantity: 1,
    },

    {
      name: "Beskar Glaive",
      quantity: 1,
    },

    {
      name: "Munitions Kit",
      quantity: 1,
    },

    {
      name: "Armstech's Implements",
      quantity: 1,
    },
  ],

  physical: {
    birthplace:
      "Rentor (Sent to Mandalore at age 5)",
    age: 30,
    height: "6'4\"",
    weight: "240 lbs",
    gender: "Male",
    eyes: "Red",
    hair: "Black",
    skin: "Blue",
    appearance:
      "Muscular, scarred from intensive Mandalorian combat training and burns.",
  },

  personality: {
    traits:
      "I view the Force as dishonorable in combat. I value intelligence and tactics in battle.",

    ideals:
      "I'll succeed in my goals, it just takes time and effort.",

    bonds:
      "I must keep the traditions of my ancestors alive.",

    flaws:
      "I often value victory regardless of what it takes to accomplish.",
  },

  biography:
    "Born into the high-ranking Mitth family, Mateo was sent to Mandalore at the age of five to be trained as a warrior and bring honor to the family name. After the Mitth family adopted Thrawn, Mateo became an afterthought. Clan Wren took him in and raised him in the traditions of Mandalore. When the Mandalorian Civil War broke out, Clan Wren agreed to part ways until the conflict settled in an effort to avoid fighting their own brothers and sisters. Since leaving Mandalore, Mateo has worked as a hired gun protecting cargo ships throughout the galaxy.",
};