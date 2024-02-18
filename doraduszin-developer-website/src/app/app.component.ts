import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {ProjectDetailComponent} from './components/project-detail-component/project-detail-component.component';
import {ModalController} from '@ionic/angular';

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

  constructor(private translocoService: TranslocoService,
              private modalController: ModalController) {
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

  showLangButton(value: string): boolean {
    return this.showLanguages && this.translocoService.getActiveLang() !== value;
  }

  async openProjectDetails(): Promise<void> {
    const modal = await this.modalController.create({
      component: ProjectDetailComponent,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }
}
