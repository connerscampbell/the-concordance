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

export type InventoryItem = {
  name: string;
  quantity: number;
};

export type CharacterFeature = {
  name: string;
  description?: string;
};

export type Power = {
  name: string;
  level?: string;
  school?: string;
  castingTime?: string;
  range?: string;
  duration?: string;
  concentration?: boolean;
  description?: string;
};

export type PhysicalDetails = {
  age?: number;
  birthplace?: string;
  height?: string;
  weight?: string;
  gender?: string;
  eyes?: string;
  hair?: string;
  skin?: string;
  appearance?: string;
};

export type Personality = {
  traits?: string;
  ideals?: string;
  bonds?: string;
  flaws?: string;
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

    powers: {
      type: "Force" | "Tech";

      points?: {
        current: number;
        max: number;
      };

      attackModifier?: number;
      saveDC?: number;

      known: Power[];
    };
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

  proficiencies?: {
    armor: string[];
    weapons: string[];
    tools: string[];
    languages: string[];
  };

  features?: {
    class: CharacterFeature[];
    species: CharacterFeature[];
    background?: CharacterFeature;
  };

  inventory: InventoryItem[];

  physical?: PhysicalDetails;

  personality?: Personality;

  biography: string;
};