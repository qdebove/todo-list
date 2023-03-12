import { defineConfig } from "cypress";
import { BASE_URL } from "./constants/environment";
import TodoRepositoryProvider from "./providers/TodoRepositoryProvider";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: BASE_URL,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      on("task", {
        async "db:reset"() {
          await TodoRepositoryProvider.getRepository().resetData();
          return null;
        },
      });
    },
  },
});
