export class Duration {
  constructor(public start: number, public end: number) {}

  public getLength(): number {
    return this.end - this.start;
  }
}
