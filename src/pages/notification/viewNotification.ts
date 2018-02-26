import { Component } from '@angular/core'

// NavParams permite capturar parametros de la url
import { NavParams } from 'ionic-angular'

@Component({
  selector: 'view-notification',
  template: `
      <ion-header>
        <ion-navbar>
          <ion-title>
            Notifications
          </ion-title>
        </ion-navbar>
      </ion-header>

      <ion-content padding>
        <ion-thumbnail item-start>
          <img src="{{notification.img}}"/>
        </ion-thumbnail>
        <h2>{{notification.nick_name}}</h2>
        <p>{{notification.text}}</p>
      </ion-content>
  `
})
export class ViewNotificationPage {

  notification = {}

  constructor(private navParams:NavParams){
    this.notification = this.navParams.get('id');
  }
}
