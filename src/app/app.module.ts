import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SalvarContatoComponent } from './contato/salvar-contato/salvar-contato.component';
import { ListarContatoComponent } from './contato/listar-contato/listar-contato.component';

@NgModule({
  declarations: [AppComponent, SalvarContatoComponent, ListarContatoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAuCnHvYjP67wCFUOKiqTZu8AvvlWPQsEc",
      authDomain: "aula-ab0bc.firebaseapp.com",
      databaseURL: "https://aula-ab0bc.firebaseio.com",
      projectId: "aula-ab0bc",
      storageBucket: "aula-ab0bc.appspot.com",
      messagingSenderId: "397139605160",
      appId: "1:397139605160:web:7b144afdee19d69b46749d"

 
    }),
    
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
