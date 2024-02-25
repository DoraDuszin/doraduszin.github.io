import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {ProjectDetailComponent} from './components/project-detail-component/project-detail-component.component';
import {ModalController} from '@ionic/angular';
import {EmploymentHistoryComponentComponent} from './components/employment-history-component/employment-history-component.component';
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
  selectedTab = '';
  selfIntroText = '';
  showLanguages = false;
  scrollPosition = 0;

  constructor(private translocoService: TranslocoService,
              private modalController: ModalController,
              private autoCloseOverlaysService: AutocloseOverlaysService) {
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
  onPopState(): void {
    this.autoCloseOverlaysService.trigger();
  }

  handleInViewport(event: { target: Element; visible: boolean }): void {
    const sectionId = event.target.id;
    if (event.visible) {
      switch (sectionId) {
        case 'aboutSection':
          this.selectedTab = 'about';
          break;
        case 'projectsSection':
          this.selectedTab = 'projects';
          break;
        case 'contactSection':
          this.selectedTab = 'contact';
          break;
      }
    }
  }

  /*@HostListener('window:scroll', [])
  onScroll(): void {
    this.updateSelectedTab();
  }

  updateSelectedTab(): void {
    /!*console.log('updateSelectedTab');*!/
    const aboutSection = this.aboutSection.nativeElement;
    /!*console.log('aboutSection: ', aboutSection);*!/
    const projectsSection = this.projectsSection.nativeElement;
    const contactSection = this.contactSection.nativeElement;

    const aboutRect = aboutSection.getBoundingClientRect();
    /!*console.log('aboutRect: ', aboutRect);*!/
    const projectsRect = projectsSection.getBoundingClientRect();
    const contactRect = contactSection.getBoundingClientRect();

    console.log('this.isElementInViewport(aboutRect): ', this.isElementInViewport(aboutRect));

    if (this.isElementInViewport(aboutRect)) {
      this.selectedTab = 'about';
    } /!*else if (this.isElementInViewport(projectsRect)) {
      this.selectedTab = 'projects';
    } else if (this.isElementInViewport(contactRect)) {
      this.selectedTab = 'contact';
    }*!/
  }

  isElementInViewport(rect: DOMRect): boolean {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    /!*const windowWidth = window.innerWidth || document.documentElement.clientWidth;*!/

    console.log('windowHeight: ', windowHeight);
    console.log('rect.top: ', rect.top);
    console.log('rect.bottom: ', rect.bottom);

    return (
      /!*rect.top >= 0 &&*!/
      /!*rect.left >= 0 &&*!/
      rect.bottom <= windowHeight
      /!*rect.right <= windowWidth*!/
    );
  }*/

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
