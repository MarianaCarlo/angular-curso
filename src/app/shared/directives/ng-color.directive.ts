import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColor') color: string;
  @Input() secondColor: string;
  

  @HostListener('mouseenter') onMouseEnter() {
    console.log('MOUSE ENTER');
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(this.secondColor);
    console.log('MOUSE LEAVE');
  }


  constructor(private el: ElementRef) {
    
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