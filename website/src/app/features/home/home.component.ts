import {Component} from '@angular/core';
import {NavbarComponent} from "../../layout/navbar/navbar.component";
import {HeaderComponent} from "../../layout/header/header.component";
import {ServicesComponent} from "../../shared/components/services/services/services.component";
import {AboutComponent} from "../../shared/components/about/about/about.component";
import {ReasonsComponent} from "../../shared/components/reasons/reasons/reasons.component";
import {StackComponent} from "../../shared/components/stack/stack/stack.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ReasonsComponent,
    StackComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
