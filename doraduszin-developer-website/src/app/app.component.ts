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
  selfIntroText = '';
  showLanguages = false;

  constructor(private translocoService: TranslocoService) {
  }

  ngOnInit(): void {
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

  toggleLanguages(): void {
    this.showLanguages = !this.showLanguages;
  }

  changeLanguage(lang: string): void {
    this.showLanguages = false;
    this.translocoService.setActiveLang(lang);
  }

  /*changeLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }*/

  showLangButton(value: string): boolean {
    return this.showLanguages && this.translocoService.getActiveLang() !== value;
  }

  /*getSelfIntroSteps(): number {
    console.log('selfintro: ', this.selfIntroText.length);
    return this.selfIntroText.length;
  }*/
}
