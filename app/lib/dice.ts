export type RollResult = {
  expression: string;
  rolls: number[];
  modifier: number;
  subtotal: number;
  total: number;
};

export function rollDice(
  numberOfDice: number,
  sides: number,
  modifier = 0
): RollResult {
  const rolls: number[] = [];

  for (let i = 0; i < numberOfDice; i++) {
    rolls.push(Math.floor(Math.random() * sides) + 1);
  }

  const subtotal = rolls.reduce((a, b) => a + b, 0);

  return {
    expression: `${numberOfDice}d${sides}${modifier >= 0 ? "+" : ""}${modifier}`,
    rolls,
    modifier,
    subtotal,
    total: subtotal + modifier,
  };
}

export function roll(expression: string): RollResult {
  const cleaned = expression.replace(/\s+/g, "").toLowerCase();

  const match = cleaned.match(/^(\d*)d(\d+)([+-]\d+)?$/);

  if (!match) {
    throw new Error(`Invalid dice expression: ${expression}`);
  }

  return rollDice(
    match[1] ? parseInt(match[1]) : 1,
    parseInt(match[2]),
    match[3] ? parseInt(match[3]) : 0
  );
}

export function d20(modifier = 0) {
  return rollDice(1, 20, modifier);
}

export function d100(modifier = 0) {
  return rollDice(1, 100, modifier);
}

export function attack(modifier = 0) {
  return d20(modifier);
}

export function savingThrow(modifier = 0) {
  return d20(modifier);
}

export function initiative(modifier = 0) {
  return d20(modifier);
}

export function abilityCheck(modifier = 0) {
  return d20(modifier);
}

export function damage(
  numberOfDice: number,
  sides: number,
  modifier = 0
) {
  return rollDice(numberOfDice, sides, modifier);
}