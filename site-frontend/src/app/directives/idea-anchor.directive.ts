import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIdeaAnchor]'
})
export class IdeaAnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
