import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight ='';

  @Input ()defaultColor = '';




  constructor(

   private el: ElementRef

  ) {
    // el.nativeElement.style.backgroundColor = this.appHighlight;

  }

    @HostListener('mouseleave') onMouseLeave(){
      this.highlight('green');
    }
    @HostListener('mouseenter') onMouseEnter(){
      this.highlight(this.appHighlight || this.defaultColor || 'red');
    }

   private highlight(color:string){
      this.el.nativeElement.style.backgroundColor = color;
    }


}
