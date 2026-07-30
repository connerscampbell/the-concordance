export type RollResult = {
  expression: string;
  total: number;
  rolls: number[];
  modifier: number;
};

export function roll(expression: string): RollResult {
  const cleaned = expression.replace(/\s+/g, "").toLowerCase();

  const match = cleaned.match(/^(\d*)d(\d+)([+-]\d+)?$/);

  if (!match) {
    throw new Error(`Invalid dice expression: ${expression}`);
  }

  const numberOfDice = match[1] ? parseInt(match[1]) : 1;
  const sides = parseInt(match[2]);
  const modifier = match[3] ? parseInt(match[3]) : 0;

  const rolls: number[] = [];

  for (let i = 0; i < numberOfDice; i++) {
    rolls.push(Math.floor(Math.random() * sides) + 1);
  }

  const total =
    rolls.reduce((sum, roll) => sum + roll, 0) +
    modifier;

  return {
    expression,
    total,
    rolls,
    modifier,
  };
}

export function d20(modifier = 0) {
  return roll(`1d20${modifier >= 0 ? "+" : ""}${modifier}`);
}

export function damage(
  dice: string,
  modifier = 0
) {
  return roll(
    `${dice}${modifier >= 0 ? "+" : ""}${modifier}`
  );
}