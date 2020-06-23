export class Film {
  constructor(
    public id: number,
    public name: string,
    public apiCode: string,
    public year: string,
    public released: string,
    public runtime: string,
    public genre: string,
    public director: string,
    public writer: string,
    public actors: string,
    public plot: string,
    public language: string,
    public country: string,
    public awards: string,
    public poster: string,
    public type: string,
    public production: string,
    public website: string
  ) {}
}
