import {Component, OnInit} from '@angular/core';
import {IonicModule, ModalController} from '@ionic/angular';
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
              private translocoService: TranslocoService) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.modalController.dismiss();
  }
}
