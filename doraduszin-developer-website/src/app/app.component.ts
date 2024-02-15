import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doraduszin-developer-website';
  selectedTab = 'about';

  constructor(private translocoService: TranslocoService) {
  }

  ngOnInit() {
    setTimeout(() => {
      const typingAnimation = document.getElementById('typing-animation');
      if (typingAnimation) {
        typingAnimation.classList.add('typing');
      }
    }, 2000);
  }

  tabChanged(tab: string): void {
    this.selectedTab = tab;
  }

  changeLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }

  showLangButton(value: string): boolean {
    return this.translocoService.getActiveLang() !== value;
  }
}
