import { Component } from '@angular/core'

import { TabsPage } from '../tabs/tabs'

// Modulos para alertas y loading
import {
  AlertController,
  LoadingController,
  NavController, // Es el controlador para compartir datos entre vistas
} from 'ionic-angular'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = { "email": "", "password": ""}

  constructor(
    private alertCtrl:AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) {

  }

  // esta funcion se ejecuta automaticamente cuando
  // arranca el componente
  // es propiamente de angular y no pertecene a ionic
  ngOnInit() {
    console.log("arranco el init")
  }

  login = ():void => {

    // permite generar una loading
    let loading = this.loadingCtrl.create({
      content: "please wait..."
    })

    // Ejecuta el loading
    loading.present()

    if(this.user.email != "" && this.user.password != ""){
      setTimeout(()=> {
        // cerrar el loading
        loading.dismiss()
        // permite la navegacion a otra pantalla
        this.navCtrl.push(TabsPage)

      },5000)

    }else {

      setTimeout(()=> {
        loading.dismiss();
        // Crea la alerta
        let alert = this.alertCtrl.create({
          title: "login",
          subTitle:"login incorrecto",
          buttons: ["Aceptar"]
        })
        // Genera la alerta
        alert.present()
      },5000)

    }
  }

}
