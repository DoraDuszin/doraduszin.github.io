import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appNavbarScroll]',
  standalone: true
})
export class NavbarScrollDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('scroled');
    const navbar = this.el.nativeElement;
    if (window.scrollY > 50) { // Adjust scroll distance as needed
      this.renderer.addClass(navbar, 'navbar-scrolled');
    } else {
      this.renderer.removeClass(navbar, 'navbar-scrolled');
    }
  }

}
