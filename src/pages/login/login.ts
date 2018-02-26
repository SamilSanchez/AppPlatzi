import { Component } from '@angular/core'

// Modulos para alertas y loading
import { AlertController, LoadingController } from 'ionic-angular'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = { "email": "", "password": ""}

  constructor(private alertCtrl:AlertController, public loadingCtrl: LoadingController) {

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
        // cerrar la alerta
        loading.dismiss()
        // Crea la alerta
        let alert = this.alertCtrl.create({
          title: "login",
          subTitle:"login Correcto",
          buttons: ["Aceptar"]
        })
        // Genera la alerta
        alert.present()

      },5000)

    }else {

      setTimeout(()=> {
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: "login",
          subTitle:"login incorrecto",
          buttons: ["Aceptar"]
        })
        alert.present()
      },5000)

    }
  }

}
