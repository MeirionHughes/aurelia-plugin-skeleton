import { customElement, useView } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

@useView(PLATFORM.moduleName("./foo.html"))
@customElement("foo")
export class Foo {

}