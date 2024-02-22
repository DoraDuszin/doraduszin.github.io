import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {ProjectDetailComponent} from './components/project-detail-component/project-detail-component.component';
import {ModalController} from '@ionic/angular';
import {EmploymentHistoryComponentComponent} from './components/employment-history-component/employment-history-component.component';

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
  scrollPosition = 0;

  constructor(private translocoService: TranslocoService,
              private modalController: ModalController) {
  }

  ngOnInit(): void {
    /*this.openProjectDetails(1);*/
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

  async openProjectDetails(projectNumber: number): Promise<void> {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const modal = await this.modalController.create({
      component: ProjectDetailComponent,
      componentProps: {
        projectNumber
      }
    });
    return await modal.present().then(() => {
      window.scrollTo(0, this.scrollPosition);
    });
  }

  async openEmploymentHistory(): Promise<void> {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const modal = await this.modalController.create({
      component: EmploymentHistoryComponentComponent
    });
    return await modal.present().then(() => {
      window.scrollTo(0, this.scrollPosition);
    });
  }
}
