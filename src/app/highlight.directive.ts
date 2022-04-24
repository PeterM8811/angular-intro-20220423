import {
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() public appHighLightColor:string ='#f0f';
  constructor(private elementRef: ElementRef) {}

  public ngOnInit() {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.style.backgroundColor = this.appHighLightColor;
    element.style.fontSize = '32px';
  }
}