# Gpeel install library ng12

@gpeel/my-perf-tools@12.0.0 is the first version of perf-tools migrated for Angular 12.

Here is the addtional steps I used to install the library into this project.

## eslint settings

In ng12 no more migration from tslint to eslint, the project comes with no linter at all, so you just need to add eslint
with:

        ng add @angular-eslint/schematics

## eslint rules

https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md

## usual eslint plugins

to install because missing by default and used but my rules:

         npm i -D eslint-plugin-jsdoc
         npm i -D eslint-plugin-import
         npm i -D eslint-plugin-prefer-arrow

         npm i -D eslint-plugin-prefer-arrow eslint-plugin-import eslint-plugin-jsdoc

## Webstorm

- activate Eslint Automatic config + fix on save option
- and disable tslint !
- Go to Tools -> Actions On Save and check - reformat Code, Optimize Imports, Rearrange Code Run code cleanup and run
  eslint --fix

## bump

    npm install -g bump-cli@1.1.3

    npm i  cpx@1.5.0

# multi CLI Projects

https://angular.io/guide/file-structure
https://angular.io/guide/creating-libraries

            ng generate library @gpeel/my-perf-tools

https://angular.io/guide/creating-libraries#managing-assets-in-a-library
Managing assets in a library Starting with version 9.x of the ng-packagr tool, you can configure the tool to
automatically copy assets into your library package as part of the build process. You can use this feature when your
library needs to publish optional theming files, Sass mixins, or documentation (like a changelog). Learn how to copy
assets into your library as part of the build. Learn more about how to use the tool to embed assets in CSS.

## tsconfig

When you import something from a library in an Angular app, Angular looks for a mapping between the library name and a
location on disk. When you install a library package, the mapping is in the node_modules folder. When you build your own
library, it has to find the mapping in your tsconfig paths.

Generating a library with the Angular CLI automatically adds its path to the tsconfig file. The Angular CLI uses the
tsconfig paths to tell the build system where to find the library.

````json
 {
  "compilerOptions": {
    "paths": {
      "@gpeel/my-perf-tools": [
        "dist/gpeel/my-perf-tools/gpeel-my-perf-tools",
        "dist/gpeel/my-perf-tools"
      ]
    }
  }
}
````

By default, CLI generate the link to the ./dist folder => So you HAVE TO BUILD the lib to test it.

If you Don'T want to build, but have you lib as simple sources, now you can change that to src with :

* MODIFED by Gauthier

````
    "paths": {
      "@gpeel/my-perf-tools": [
        "projects/gpeel/my-perf-tools/src/public-api.ts"
      ]
    },
````

##               

In the lib .eslintrc.json the generated path is wrong, change it from :
line 2

    "extends": "../../.eslintrc.json",

to :

    "extends": "../../../.eslintrc.json",

And also later tsconfig paths are wrong. FORM

````json
{
  "extends": "../../.eslintrc.json",
  "ignorePatterns": [
    "!**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "projects/gpeel/my-perf-tools/tsconfig.lib.json",
          "projects/gpeel/my-perf-tools/tsconfig.spec.json"
        ],
        "createDefaultProgram": true
      },
````

TO CORRECT VERSION :

````json
{
  "extends": "../../../.eslintrc.json",
  "ignorePatterns": [
    "!**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.lib.json",
          "tsconfig.spec.json"
        ],
        "createDefaultProgram": true
      },
````

## npm login

You should do it ONCE on your machine:

    $npm login
    Username: gpeel
    Password:
    Email: (this IS public) your.email@hhh.ccc
    Logged in as gpeel on https://registry.npmjs.org/.

This creates a .npmrc file in your c/users/gauthier with the credit to log in https://www.npmjs.com/

## my logging lib

      npm i @gpeel/plog
