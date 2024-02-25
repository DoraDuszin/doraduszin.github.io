import {Injectable} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutocloseOverlaysService {

  constructor(private modalCtrl: ModalController
  ) {
  }

  async trigger() {
    console.log('backbutton triggered');

    // close modal
    try {
      const element = await this.modalCtrl.getTop();
      if (element) {
        element.dismiss();
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
