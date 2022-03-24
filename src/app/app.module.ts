import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/pages/acceuil/acceuil.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { VenteComponent } from './components/pages/vente/vente.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { AvisComponent } from './components/pages/avis/avis.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { GarderComponent } from './components/pages/garder/garder.component';
import { AccouplerComponent } from './components/pages/accoupler/accoupler.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProfilComponent } from './components/pages/profil/profil.component';





@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarStyleOneComponent,
    FooterStyleOneComponent,
    FooterStyleTwoComponent,
    AboutComponent,
    FaqComponent,
    ErrorComponent,
    SignInComponent,
    SignUpComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    ProfilComponent,
    AcceuilComponent,
    GarderComponent,
    VenteComponent,
    AccouplerComponent,
    AvisComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
