import Todo from "./Todo";

export class ServerError extends Error {
  constructor(public readonly message: string) {
    super(message);
  }
}

export class AttributeError extends Error {
  constructor(
    public readonly target: keyof Todo,
    public readonly message: string
  ) {
    super(message);
  }
}
