import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})

export class BlueColoredDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = "blue";
  }

  //target:EVENT
  @HostListener('click',['$event'])
    elemClicked(elem){
      console.log('clicked', elem);
    }

  /*@HostListener('click') doSomething() {
    alert("it works");
  }*/
}
