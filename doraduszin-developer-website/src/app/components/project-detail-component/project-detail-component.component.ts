import {Component, Input, OnInit} from '@angular/core';
import {IonicModule, ModalController} from '@ionic/angular';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-project-detail-component',
  templateUrl: './project-detail-component.component.html',
  styleUrl: './project-detail-component.component.css'
})
export class ProjectDetailComponent implements OnInit {

  @Input() projectNumber: number;
  projectName = '';
  projectSummary = '';
  tasks = {
    first: '',
    second: ''
  };

  constructor(private modalController: ModalController,
              private translocoService: TranslocoService) {
  }

  ngOnInit(): void {
    console.log('projectNumber: ', this.projectNumber);
    this.translocoService.selectTranslateObject('content.projects.project-' + this.projectNumber)
      .subscribe(translation => {
      this.projectName = translation.title;
    });
    this.translocoService.selectTranslateObject('content.projects.project-' + this.projectNumber + '.detailed-description')
      .subscribe(translation => {
        this.projectSummary = translation.summary;
      });
    this.translocoService.selectTranslateObject('content.projects.project-' + this.projectNumber + '.detailed-description.tasks')
      .subscribe(translation => {
        this.tasks.first = translation.first;
        this.tasks.second = translation.second;
      });
  }

  close(): void {
    this.modalController.dismiss();
  }
}
