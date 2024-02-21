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
  client = '';
  projectSummary = {
    first: '',
    second: ''
  };
  tasks = {
    first: '',
    second: '',
    third: ''
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
        this.client = translation.client;
        this.projectSummary.first = translation.summary.first;
        this.projectSummary.second = translation.summary.second;
      });
    this.translocoService.selectTranslateObject('content.projects.project-' + this.projectNumber + '.detailed-description.tasks')
      .subscribe(translation => {
        this.tasks.first = translation.first;
        this.tasks.second = translation.second;
        this.tasks.third = translation.third;
      });
  }

  close(): void {
    this.modalController.dismiss();
  }
}
