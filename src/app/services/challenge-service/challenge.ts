import {randomInt} from "crypto";

export interface Challenge {
  type: string,
  getSolution: () => string,
  getText: () => string
}

export class Add implements Challenge {
  getSolution(): string {
    return `${this.numbers.reduce(((previousValue, currentValue) => previousValue + currentValue))}`;
  }
  type: '+' = '+';
  numbers: number[] = [];

  public Add(){
    this.numbers = [randomInt(10, 99), randomInt(10, 99)]
  }

  getText(): string {
    return `${this.numbers.reduce((pre, curr, i) => `${pre + (i > 0 ? " + " : "") + curr}`, '')}`;
  }
}
