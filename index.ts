interface TProps {
  name: string;
}

export class Name {
  constructor(public readonly name: string) {}

  randomRange(myMin: number, myMax: number) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  whatIsMyName(): string {
    return this.name;
  }

  toTheFuckingConsole() {
    return console.log(this.name);
  }

  toTheConsole() {
    return console.log(this.name);
  }

  fuckWithMyName(): string {
    let newName: string = "";
    let first: boolean = true;

    for (let char of this.name) {
      if (first) {
        newName =
          newName +
          this.name[this.randomRange(0, this.name.length - 1)].toUpperCase();
        first = false;
      } else {
        newName =
          newName +
          this.name[this.randomRange(0, this.name.length - 1)].toLowerCase();
      }
    }

    return newName;
  }
}

let Lake = new Name("Lake");

export function randomGenerateName(): string {
  let first: boolean = true;
  let nameCollection: string = "abcdefghijklmnopqrstuvwxyz";
  let result: string = "";

  for (let times = 0; times < 4; times++) {
    if (first) {
      result =
        result +
        nameCollection[
          Lake.randomRange(0, nameCollection.length - 1)
        ].toUpperCase();
      first = false;
    } else {
      result =
        result +
        nameCollection[
          Lake.randomRange(0, nameCollection.length - 1)
        ].toLowerCase();
    }
  }

  return result;
}
