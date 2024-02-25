import {Component, OnInit} from '@angular/core';
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
export class EmploymentHistoryComponentComponent implements OnInit {

  constructor(private modalController: ModalController,
              private platform: Platform) {
  }

  ngOnInit(): void {
    /*this.platform.backButton.subscribeWithPriority(0, () => {
      this.close();
    });*/
    if (!window.history.state.modal) {
      const modalState = { modal: true };
      history.pushState(modalState, null);
    }
  }

  close(): void {
    this.modalController.dismiss();
  }
}
