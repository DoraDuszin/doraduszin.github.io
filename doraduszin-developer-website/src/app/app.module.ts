import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import {CommonModule} from '@angular/common';
import {ProjectDetailComponent} from './components/project-detail-component/project-detail-component.component';
import {AutocloseOverlaysService} from './service/AutoCloseOverlayService';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslocoRootModule,
    CommonModule,
    IonicModule.forRoot({
      scrollAssist: false,
      hardwareBackButton: true,
      experimentalCloseWatcher: true
    }),
    HttpClientModule
  ],
  providers: [AutocloseOverlaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
