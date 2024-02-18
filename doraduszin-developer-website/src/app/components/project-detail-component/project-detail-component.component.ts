import {Component, OnInit} from '@angular/core';
import {IonicModule, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-project-detail-component',
  standalone: true,
    imports: [
        IonicModule
    ],
  templateUrl: './project-detail-component.component.html',
  styleUrl: './project-detail-component.component.css'
})
export class ProjectDetailComponent implements OnInit {

  constructor(private modalController: ModalController) {
  }

  ngOnInit(): void {

  }

  close(): void {
    this.modalController.dismiss();
  }
}
