# Template Form  - Material/Validation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Resolve Angular Flex Layout error

```
node_modules/@angular/flex-layout/grid/typings/rows/rows.d.ts:23:9 - error TS1086: An accessor cannot be declared in an ambient context.

23     set inline(val: boolean);
           ~~~~~~


```

Change the version of the flex layout to version 8 under the package.json
```
"@angular/flex-layout": "^8.0.0-beta.27",
```

reinstall the libraries again to remove the version 9.