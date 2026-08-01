export type Weapon = {
  name: string;
  attackBonus: number;
  damage: string;
  damageType: string;
  notes: string;
};

export type Ability = {
  score: number;
  modifier: number;
  save: number;
};

export type Character = {
  profile: {
    name: string;
    portrait: string;
    species: string;
    class: string;
    archetype: string;
    level: number;
    background: string;
    alignment: string;
    credits: number;
    proficiencyBonus: number;
    speed: number;
    passivePerception: number;
  };

  combat: {
    hp: {
      current: number;
      max: number;
      temporary: number;

      hitDice?: {
        current: number;
        max: number;
        die: string;
      };
    };

    armorClass: number;
    initiative: number;

    conditions: string[];

    weapons: Weapon[];

    techPowers: string[];
  };

  abilities: {
    strength: Ability;
    dexterity: Ability;
    constitution: Ability;
    intelligence: Ability;
    wisdom: Ability;
    charisma: Ability;
  };

  skills: {
    athletics: number;
    acrobatics: number;
    sleightOfHand: number;
    stealth: number;

    investigation: number;
    lore: number;
    nature: number;
    piloting: number;
    technology: number;

    animalHandling: number;
    insight: number;
    medicine: number;
    perception: number;
    survival: number;

    deception: number;
    intimidation: number;
    performance: number;
    persuasion: number;
  };

  inventory: {
    name: string;
    quantity: number;
  }[];

  biography: string;
};