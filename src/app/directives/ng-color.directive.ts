import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('yellow');
    console.log('MOUSE ENTER');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('green');
    console.log('MOUSE LEAVE');
  }

  constructor(private el: ElementRef) {
    console.log('ELEMENT REF: ', el);
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  changeColor (color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}


/*
class Person {
  
  constructor (public name: string, public lastName: string){
    this.name = name;
    this.lastName = lastName;
  }
}
*/