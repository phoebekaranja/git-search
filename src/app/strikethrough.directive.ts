import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  constructor(private elem:ElementRef){}



    @HostListener("click") onClicks(){
      this.textDeco("strikethrough")
    }

    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("None")
    }

    private textDeco(action:string){
      this.elem.nativeElement.style.textDecoration=action;

    }
  }
