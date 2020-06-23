export class Exhibition {
  constructor(
    public id: number,
    public film: string,
    public poster: string,
    public year: string,
    public apiCode: string,
    public room: string,
    public schedule: string
  ) {}
}
