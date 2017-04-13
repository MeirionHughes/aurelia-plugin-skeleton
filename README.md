# aurelia-plugin-skeleton

**[try the example](https://cdn.rawgit.com/MeirionHughes/aurelia-plugin-skeleton/d20bfef6/index.html)**

## development

```shell
npm install
npm start
```

## build

```shell
npm install
npm build
```

## Consuming

to consume your plugin in a seperate app you must wrap the package name like so: 

```js 
aurelia.use.plugin(PLATFORM.moduleName("my-plugin-package-name");
```

## todo
* source debugging in vscode
* multi-dist build
* unit testing

