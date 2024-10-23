import { Component } from '@angular/core';
import {NavbarComponent} from "../../layout/navbar/navbar.component";
import {HeaderComponent} from "../../layout/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
