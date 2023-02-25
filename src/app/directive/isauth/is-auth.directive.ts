import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[isAuth]'
})
export class IsAuthDirective {

  @Input('isAuth') authAccess: string;

  constructor(private _element: ElementRef) { }

  ngOnInit() {

    if(this.authAccess != null){}

  }

}
