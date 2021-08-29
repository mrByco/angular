
function randomInt(min: number, max: number){
  let random = Math.random();
  random = random * (max - min + 1) + min;
  return Math.floor(random);
}

export interface Challenge {
  type: string,
  getSolution: () => string,
  getText: () => string
}

export function checkChallengeSolution(challenge: Challenge, testSolution: string): boolean{
  return challenge.getSolution().toLowerCase() == testSolution.toLowerCase()
}

export class Add implements Challenge {
  getSolution(): string {
    return `${this.numbers.reduce(((previousValue, currentValue) => previousValue + currentValue))}`;
  }
  type: '+' = '+';
  numbers: number[] = [];

  constructor(){
    this.numbers = [randomInt(10, 99), randomInt(10, 99)]
  }

  getText(): string {
    console.log(this);
    return `${this.numbers.reduce((pre, curr, i) => `${pre + (i > 0 ? " + " : "") + curr}`, '')}`;
  }
}
