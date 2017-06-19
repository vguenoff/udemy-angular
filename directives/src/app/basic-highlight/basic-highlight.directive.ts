import { Directive, ElementRef, OnInit } from '@angular/core';

// decoraor
@Directive({
  selector: '[appBasicHighligh]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(
    private elementRef: ElementRef
  ) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
  }
}
