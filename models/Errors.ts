import Todo from "./Todo";

export class ServerError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class AttributeError extends Error {
  constructor(public readonly target: keyof Todo, message: string) {
    super(message);
  }
}
