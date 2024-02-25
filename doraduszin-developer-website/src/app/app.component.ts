import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {ProjectDetailComponent} from './components/project-detail-component/project-detail-component.component';
import {ModalController} from '@ionic/angular';
import {EmploymentHistoryComponentComponent} from './components/employment-history-component/employment-history-component.component';
import {NavigationStart, Router} from '@angular/router';
import {AutocloseOverlaysService} from './service/AutoCloseOverlayService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('aboutSection') aboutSection: ElementRef;
  @ViewChild('projectsSection') projectsSection: ElementRef;
  @ViewChild('contactSection') contactSection: ElementRef;

  title = 'doraduszin-developer-website';
  selectedTab = 'about';
  selfIntroText = '';
  showLanguages = false;
  scrollPosition = 0;

  constructor(private translocoService: TranslocoService,
              private modalController: ModalController,
              private router: Router,
              private autoCloseOverlaysService: AutocloseOverlaysService) {
    /*this.router.events.subscribe((event: any): void => {
      if (event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
          this.autoCloseOverlaysService.trigger();
        }
      }
    });*/
  }

  ngOnInit(): void {
    /*this.openProjectDetails(1);*/
    /*this.openEmploymentHistory();*/
    setTimeout(() => {
      const typingAnimation = document.getElementById('typing-animation');
      if (typingAnimation) {
        typingAnimation.classList.add('typing');
      }
    }, 2000);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.autoCloseOverlaysService.trigger();
  }

  tabChanged(tab: string): void {
    this.selectedTab = tab;
    switch (tab) {
      case 'about':
        this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
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
