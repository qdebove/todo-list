import { CURRENT_ENVIRONMENT } from "../constants/environment";
import ProviderEnvironment from "../models/enums/ProviderEnvironment";
import AbstractTodoRepository from "../repositories/AbstractTodoRepository";
import LocalTodoRepository from "../repositories/LocalTodoRepository";

export default class TodoRepositoryProvider {
  static getRepository(): AbstractTodoRepository {
    switch (CURRENT_ENVIRONMENT) {
      case ProviderEnvironment.TEST:
      case ProviderEnvironment.LOCAL: {
        return new LocalTodoRepository();
      }

      default: {
        throw new Error("Not yet implemented !");
      }
    }
  }
}
