const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')


module.exports = defineConfig({
  projectId: 'iczcf9',
  e2e: {
    //prevent auto reexecute when there are changes
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {      
      // implement node event listeners here
      on('task', {downloadFile})
    },
    "reporter":"mochawesome",
    "reporterOptions":{
      "charts":true,
      "overwrite":false,
      "html":false,
      "json":true,
      "reportDir":"cypress/report"
    }
  },
});
