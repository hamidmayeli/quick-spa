import { defineConfig } from "cypress";
import registerCodeCoverageTasks from "@cypress/code-coverage/task";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      // implement node event listeners here

      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      // implement node event listeners here

      return config;
    },
  },
});
