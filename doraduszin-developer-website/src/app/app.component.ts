import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doraduszin-developer-website';
  selectedTab = 'about';

  tabChanged(tab: string): void {
    this.selectedTab = tab;
  }
}
