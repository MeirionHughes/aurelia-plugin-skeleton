import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from "aurelia-pal";

export function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration();
  aurelia.use.plugin(PLATFORM.moduleName("my-plugin"));
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}