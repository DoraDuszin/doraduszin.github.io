import {Component, OnDestroy, OnInit} from '@angular/core';
import {IonicModule, ModalController, Platform} from '@ionic/angular';
import {TranslocoDirective, TranslocoService} from '@ngneat/transloco';

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
export class EmploymentHistoryComponentComponent implements OnInit, OnDestroy {

  constructor(private modalController: ModalController,
              private platform: Platform) {
  }

  ngOnInit(): void {
    /*this.platform.backButton.subscribeWithPriority(0, () => {
      this.close();
    });*/
    window.addEventListener('popstate', this.onPopState.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('popstate', this.onPopState.bind(this));
  }

  onPopState(event: PopStateEvent): void {
    if (this.modalController.getTop()) {
      this.close();
    }
  }

  close(): void {
    this.modalController.dismiss();
  }
}
