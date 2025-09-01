export class BookRentedEvent {
  constructor(
    public readonly bookId: string,
    public readonly userId: string,
    public readonly rentedAt: Date,
  ) {}
}
