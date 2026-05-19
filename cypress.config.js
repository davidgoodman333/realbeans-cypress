const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "b52i9n",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
