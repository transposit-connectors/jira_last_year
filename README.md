# JIRAs of Last Year

This app emails its users with JIRA tickets that they filed 1 year ago that are still unresolved.

## Forking the application

In order to use this in your own JIRA workspace, you'll need to fork the app and provide OAuth credentials for both [JIRA](https://www.transposit.com/docs/references/connect-to-jira/) and [Gmail](https://www.transposit.com/docs/references/connector-authentication/#generating-a-client-id-and-secret-with-google-connectors).

Your coworkers can provide their JIRA credentials via the settings page of your app, and you can create a scheduled task that runs the run_for_all_users operation each day.
