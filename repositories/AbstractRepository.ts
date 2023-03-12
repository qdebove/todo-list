import AbstractDB from "../db/AbstractDB";

export default abstract class AbstractRepository<T> {
  constructor(protected readonly _db: AbstractDB<T>) {}

  public async getAll(): Promise<T[]> {
    return this._db.getAll();
  }

  public async getById(idWanted: number): Promise<T | undefined> {
    return this._db.getOneById(idWanted);
  }

  public async post(data: Partial<T>): Promise<T> {
    return this._db.insertOne(data);
  }

  public async patch<S extends keyof T>(
    idWanted: number,
    attribute: S,
    value: T[S]
  ): Promise<void> {
    return this._db.updateOne(idWanted, attribute, value);
  }

  public async resetData(): Promise<void> {
    return this._db.resetDatabase();
  }
}
