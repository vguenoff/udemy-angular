import { 
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'black';
  @Input() highlightColor = 'blue';
  @HostBinding('style.color') color: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
    this.color = this.defaultColor;
  }
 
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.color = this.defaultColor;
  }
}
