import { Component } from '@angular/core';
import {NavbarComponent} from "../../layout/navbar/navbar.component";
import {HeaderComponent} from "../../layout/header/header.component";
import {WelcomeComponent} from "../../shared/components/welcome/welcome/welcome.component";
import {ServicesComponent} from "../../shared/components/services/services/services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    WelcomeComponent,
    ServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
