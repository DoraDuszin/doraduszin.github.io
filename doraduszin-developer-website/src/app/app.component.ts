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

  constructor(private translocoService: TranslocoService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      const typingAnimation = document.getElementById('typing-animation');
      if (typingAnimation) {
        typingAnimation.classList.add('typing');
      }
    }, 2000);
    /*this.translocoService.selectTranslateObject('content.intro.title').subscribe(translation => {
      this.selfIntroText = translation;
      const style = document.createElement('style');
      style.innerHTML = `
      .typing-animation {
        --steps: ${this.getSelfIntroSteps()};
      }
    `;
      document.head.appendChild(style);
    });*/
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

  /*getSelfIntroSteps(): number {
    console.log('selfintro: ', this.selfIntroText.length);
    return this.selfIntroText.length;
  }*/
}
