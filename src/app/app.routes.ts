import { Routes } from '@angular/router';

import { ReittherapieComponent } from './pages/reittherapie';
import { LeistungenComponent } from './pages/leistungen';
import { AboutComponent } from './pages/about';
import { TierischeTherapeutenComponent } from './pages/tierische-therapeuten';
import { ContactComponent } from './pages/contact';
import { ImpressumComponent } from './pages/impressum';
import { AgbsComponent } from './pages/agbs';
import { passwordGuard } from './password.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: ReittherapieComponent, canActivate: [passwordGuard] },
    { path: 'leistungen', component: LeistungenComponent, canActivate: [passwordGuard] },
    { path: 'about', component: AboutComponent, canActivate: [passwordGuard] },
    { path: 'tierische-therapeuten', component: TierischeTherapeutenComponent, canActivate: [passwordGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [passwordGuard] },
    { path: 'impressum', component: ImpressumComponent, canActivate: [passwordGuard] },
    { path: 'agbs', component: AgbsComponent, canActivate: [passwordGuard] },
    { path: 'login', component: LoginComponent},

    // for all else redirect to the home page
    { path: '**', redirectTo: '' }
];
