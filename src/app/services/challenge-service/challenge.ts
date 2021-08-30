
function randomInt(min: number, max: number){
  let random = Math.random();
  random = random * (max - min + 1) + min;
  return Math.floor(random);
}

export interface Challenge {
  type: string,
  getSolution: () => string,
  getText: () => string,
  firstCheck: boolean
}

export function checkChallengeSolution(challenge: Challenge, testSolution: string): boolean{
  return challenge.getSolution().toLowerCase() == testSolution.toLowerCase()
}

export class Add implements Challenge {
  public readonly defaultPreferences = {
    operandSize: 30,
    numberOfOperands: 0.1,
  }


  getSolution(): string {
    return `${this.numbers.reduce(((previousValue, currentValue) => previousValue + currentValue))}`;
  }
  type: '+' = '+';
  numbers: number[] = [];
  firstCheck: boolean = true;

  constructor(level: number){
    let getOperand = (operandTargetSize: number) =>Math.floor(operandTargetSize + randomInt(Math.floor(operandTargetSize * 0.3), Math.floor(operandTargetSize * 2)));
    let operandSize= level * this.defaultPreferences.operandSize;
    this.numbers = [getOperand(operandSize), getOperand(operandSize)];
  }

  getText(): string {
    return `${this.numbers.reduce((pre, curr, i) => `${pre + (i > 0 ? " + " : "") + curr}`, '')}`;
  }
}
