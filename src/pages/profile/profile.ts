import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Notifications } from '../../commons/notification'
import { Profile } from '../../commons/profile'
import { ViewNotificationPage } from '../../pages/notification/viewNotification'


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  me:Profile = {
    "img":'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg',
     nick_name:'@jorgeucano',
    "interactions":1,
    "github": "jorgeucano",
    "twitter": "jorgeucano",
    "medium": "jorgeucano",
    "bio": "Jorge Cano es Google Developer Expert en Angular y Tecnologías Web. Organizador de ngbaires. Director de tecnologias en JavaScript es especialista en Angular y Firebase. Tambien da cursos, charlas y escribe articulos tecnicos."
  };

  notifications:Array<Notifications>= [
      {action: 'reply', img:'https://pbs.twimg.com/profile_images/635135056336523264/Zoe8kLQX_400x400.jpg', nick_name:'@freddier', text:'platzitter es lo mas'},
      {action: 'replatzitt', img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
      {action: 'mention', img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'}
    ];

  constructor(public navCtrl: NavController) {

  }

  viewNotification(_notification:Notifications){
    this.navCtrl.push(ViewNotificationPage,{
      id: _notification
    })
  }

}
