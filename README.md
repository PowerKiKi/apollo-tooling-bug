# Demo for `ENGINE_API_KEY` bug
 
This demonstrate the incorrectly required `ENGINE_API_KEY` when trying to generate code
locally as discussed in https://github.com/apollographql/apollo-tooling/pull/590#issuecomment-436879536.

Test it with:

```bash
yarn install && yarn codegen
```

This will incorrectly error out:

```bash
yarn run v1.12.3
$ apollo client:codegen -c apollo.config.js  --outputFlat --target typescript src
{ Error: Error in "Loading schema for my-test-service": Error: ENGINE_API_KEY not found
    at Object.error (/my-project/node_modules/@oclif/errors/lib/index.js:22:17)
    at Generate.error (/my-project/node_modules/@oclif/command/lib/command.js:42:23)
    at OclifLoadingHandler.showError (/my-project/node_modules/apollo/lib/OclifLoadingHandler.js:28:22)
    at OclifLoadingHandler.handle (/my-project/node_modules/apollo/lib/OclifLoadingHandler.js:13:18) oclif: { exit: 2 }, code: undefined }
  ✖ Loading Apollo Project
    → Error initializing Apollo GraphQL project "my-test-service": Error: Error in "Loading schema for my-test-service": Error: ENGINE_API_KEY not found
    Generating query files
 ›   Error: Error initializing Apollo GraphQL project "my-test-service": Error: Error in "Loading schema for my-test-service": Error: ENGINE_API_KEY not found
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
