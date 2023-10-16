import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fontSize20]'
})
export class FontSize20Directive {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
  }
}
