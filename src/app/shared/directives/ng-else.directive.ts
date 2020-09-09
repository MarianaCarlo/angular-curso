import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngElse]'
})
export class NgElseDirective implements OnChanges{
  //@Input('ngElse') sentence: boolean;
  @Input()
  set ngElse(condition: boolean){
    if(condition){
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  // tslint:disable-next-line: comment-format
  //con los parametros se supone que es una directiva estructural
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

   }

  ngOnChanges(){

   }

}
