import { Character, Weapon, Ability } from "../types";

export const mateo: Character = {
  profile: {
    name: "Mateo Wren",
    portrait: "/portraits/mateo.png",
    species: "Chiss",
    class: "Fighter",
    archetype: "Assault Specialist",
    level: 5,
    background: "Mercenary",
    alignment: "Neutral",
    credits: 500,
    proficiencyBonus: 3,
    speed: 30,
    passivePerception: 13,
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
        attackBonus: 7,
        damage: "1d8+4",
        damageType: "Energy",
        notes: "Range 80/320 • Reload 20",
      },

      {
        name: "Beskar Glaive",
        attackBonus: 7,
        damage: "1d10+4",
        damageType: "Kinetic",
        notes: "Reach • Heavy",
      },

      {
        name: "Unarmed Strike",
        attackBonus: 6,
        damage: "4",
        damageType: "Kinetic",
        notes: "",
      },
    ],

    techPowers: [],
  },

  abilities: {
    strength: <Ability>{
      score: 18,
      modifier: 4,
      save: 7,
    },

    dexterity: {
      score: 14,
      modifier: 2,
      save: 2,
    },

    constitution: {
      score: 16,
      modifier: 3,
      save: 6,
    },

    intelligence: {
      score: 10,
      modifier: 0,
      save: 0,
    },

    wisdom: {
      score: 12,
      modifier: 1,
      save: 1,
    },

    charisma: {
      score: 8,
      modifier: -1,
      save: -1,
    },
  },

  skills: {
    athletics: 7,
    acrobatics: 2,
    sleightOfHand: 2,
    stealth: 2,

    investigation: 0,
    lore: 0,
    nature: 0,
    piloting: 2,
    technology: 0,

    animalHandling: 1,
    insight: 1,
    medicine: 1,
    perception: 3,
    survival: 1,

    deception: -1,
    intimidation: 5,
    performance: -1,
    persuasion: -1,
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
  ],

  biography:
    "A Chiss adopted into Clan Wren after the Mandalorian Civil War. Overshadowed by the legendary Thrawn, Mateo forged his own reputation as a disciplined mercenary, relying on relentless combat training, tactical instinct, and unwavering determination rather than legacy.",
};