import { Component } from '@angular/core';
import {NavbarScrollDirective} from "../../shared/directives/navbar-scroll/navbar-scroll.directive";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        NavbarScrollDirective
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
