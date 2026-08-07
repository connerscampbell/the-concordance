import { Power } from "../types";

export const techPowers = {
  electroshock: <Power>{
    name: "Electroshock",
    level: "At-Will",
    school: "Tech",
    castingTime: "1 action",
    range: "Touch",
    duration: "Instantaneous",
    concentration: false,
    description: `Lightning springs from you to deliver a shock to a creature you try to touch. Make a melee tech attack against the target. You have advantage on the attack roll if the target is made of metal or wearing armor made of metal. On a hit, the target takes 1d8 lightning damage and becomes shocked until the start of its next turn.

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,
  },

  ionBlast: <Power>{
    name: "Ion Blast",
    level: "At-Will",
    school: "Tech",
    castingTime: "1 action",
    range: "60 feet",
    duration: "Instantaneous",
    concentration: false,
    description: `You create a blast of ion energy. Choose one creature within range that you can see, or choose two creatures within range that are within 5 feet of each other that you can see. A target must succeed on a Dexterity saving throw or take 1d4 ion damage.

This power's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).`,
  },

  jetOfFlame: <Power>{
    name: "Jet of Flame",
    level: "At-Will",
    school: "Tech",
    castingTime: "1 action",
    range: "Self (30-foot sphere)",
    duration: "10 minutes",
    concentration: false,
    description: `A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The power ends if you dismiss it as an action or if you cast it again.

You can also attack with the flame, although doing so ends the power. When you cast this power, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged tech attack. On a hit, the target takes 1d8 fire damage. The fire ignites any flammable objects in the area that aren't being worn or carried.

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,
  },

  minorDefibrillation: <Power>{
    name: "Minor Defibrillation",
    level: "At-Will",
    school: "Tech",
    castingTime: "1 action",
    range: "Touch",
    duration: "Instantaneous",
    concentration: false,
    description: `You generate a static charge that can aid or harm a creature you touch. Make a melee tech attack against the target. On a hit, the target takes 1d10 lightning damage. If the target is a living creature that has 0 hit points, it immediately gains one death saving throw success instead of taking damage.

This power's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).`,
  },

  detonator: <Power>{
    name: "Detonator",
    level: "1st",
    school: "Tech",
    castingTime: "1 action",
    range: "60 feet",
    duration: "Instantaneous",
    concentration: false,
    description: `You launch a detonator at a creature. Make a ranged tech attack against a creature you can see within range. On a hit, the target takes 1d6 fire damage, and each creature within 5 feet of the target must make a Dexterity saving throw or take 1d4 fire damage.

This power's damage increases by one die when you reach 5th level (2d6/2d4), 11th level (3d6/3d4), and 17th level (4d6/4d4).`,
  },

  echoBlast: <Power>{
    name: "Echo Blast",
    level: "1st",
    school: "Tech",
    castingTime: "1 action",
    range: "30 feet",
    duration: "Instantaneous",
    concentration: false,
    description: `You emit a reverberating pulse of sound at a target within range. The target must succeed on a Wisdom saving throw or take 1d8 sonic damage.

This power can hit multiple targets in succession when you reach higher levels: two targets at 5th level, three targets at 11th level, and four targets at 17th level. Each target must be within 30 feet of the previous target, and the last target must be no further than 30 feet away from you. You cannot target the same creature twice in succession.`,
  },

  mending: <Power>{
    name: "Mending",
    level: "At-Will",
    school: "Tech",
    castingTime: "1 minute",
    range: "Touch",
    duration: "Instantaneous",
    concentration: false,
    description: `This ability repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn strap, or a leaking cup. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.

If you target a droid or construct with this feature, it can spend and roll one of its Hit Dice and regain that many hit points.`,
  },
};