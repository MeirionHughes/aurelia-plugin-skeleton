import { customElement, useView } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

@useView(PLATFORM.moduleName("./ray.html"))
@customElement("ray")
export class Ray{
  name = "Raaaayyy!";
}