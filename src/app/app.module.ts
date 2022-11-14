import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilParticulierComponent } from './accueil-particulier/accueil-particulier.component';
import { TabBordComponent } from './tab-bord/tab-bord.component';
import { PoubelleComponent } from './poubelle/poubelle.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AccueilParticulierComponent,
    TabBordComponent,
    PoubelleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
