export default abstract class AbstractDB<T> {
  abstract getAll(): Promise<T[]>;
  abstract getOneById(idWanted: number): Promise<T | undefined>;
  abstract insertOne(data: Partial<T>): Promise<T>;
  abstract updateOne<S extends keyof T>(
    idWanted: number,
    attribute: S,
    value: T[S]
  ): Promise<void>;
  // Test purpose only
  abstract resetDatabase(): Promise<void>;
}
