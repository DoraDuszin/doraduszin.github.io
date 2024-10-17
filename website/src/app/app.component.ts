import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComingSoonComponent} from "./features/coming-soon/coming-soon/coming-soon.component";
import {HomeComponent} from "./features/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ComingSoonComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
