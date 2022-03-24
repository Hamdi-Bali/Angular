import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './components/pages/acceuil/acceuil.component';
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

const routes: Routes = [
    {path: '', component: AcceuilComponent},
    {path: 'about', component: AboutComponent},
    {path: 'team', component: VenteComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'testimonials', component: AvisComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'services', component: GarderComponent},
    {path: 'services-details', component: AccouplerComponent},
    {path: 'contact', component: ContactComponent},
    

    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }