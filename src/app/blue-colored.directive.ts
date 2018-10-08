import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})

export class BlueColoredDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = "blue";
  }

  @HostListener('click') doSomething() {
    alert("it works");
  }

}
