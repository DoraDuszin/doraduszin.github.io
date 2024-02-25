import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonContent, IonicModule, ModalController} from '@ionic/angular';
import {TranslocoDirective} from '@ngneat/transloco';

@Component({
  selector: 'app-employment-history-component',
  standalone: true,
  imports: [
    IonicModule,
    TranslocoDirective
  ],
  templateUrl: './employment-history-component.component.html',
  styleUrl: './employment-history-component.component.css'
})
export class EmploymentHistoryComponentComponent implements OnInit {

  /*@ViewChild('employmentFirst') employmentFirst: ElementRef;
  @ViewChild('employmentSecond') employmentSecond: ElementRef;
  @ViewChild('employmentThird') employmentThird: ElementRef;
  @ViewChild('employmentFourth') employmentFourth: ElementRef;
  @ViewChild('content') content: IonContent;*/
  activeAccordion = '';
  activeAccordion2 = '';

  constructor(private modalController: ModalController) {
  }

  ngOnInit(): void {
    if (!window.history.state.modal) {
      const modalState = { modal: true };
      history.pushState(modalState, null);
    }
  }

  close(): void {
    this.modalController.dismiss();
  }

  toggleAccordion(value: string, variant: number): void {
    if (variant === 1) {
      this.activeAccordion = this.activeAccordion === value ? '' : value;
    } else {
      this.activeAccordion2 = this.activeAccordion2 === value ? '' : value;
    }
  }

  isAccordionOpen(value: string, variant: number): boolean {
    if (variant === 1) {
      return this.activeAccordion === value;
    } else {
      return this.activeAccordion2 === value;
    }
  }

  /*scrollToAccordionContent(event: any) {
    const value = event.detail.value;
    console.log('value: ', value);
    switch (value) {
      case 'first':
        this.employmentFirst.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'second':
        this.employmentSecond.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'third':
        this.employmentThird.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'fourth':
        this.employmentFourth.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }*/
}
