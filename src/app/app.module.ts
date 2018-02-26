import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


// Paginas de la Apliacion
import { LoginPage } from '../pages/login/login'
import { NotificationPage } from '../pages/notification/notification';
import { ViewNotificationPage } from '../pages/notification/viewNotification'
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// NgModule se utiliza para manejar todos los modulos de angular
// Si no esta esto no lo vamos a poder encontrar
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NotificationPage,
    ViewNotificationPage,
    ProfilePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {})
  ],
  // Es la declaracion del componente inicial
  bootstrap: [IonicApp],
  // Significa que vamos a poder entrar desde aqui
  entryComponents: [
    MyApp,
    LoginPage,
    NotificationPage,
    ViewNotificationPage,
    ProfilePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
