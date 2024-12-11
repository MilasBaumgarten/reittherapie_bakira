import { Routes } from '@angular/router';

import { ReittherapieComponent } from './pages/reittherapie';
import { LeistungenComponent } from './pages/leistungen';
import { AboutComponent } from './pages/about';
import { TierischeTherapeutenComponent } from './pages/tierische-therapeuten';
import { ContactComponent } from './pages/contact';
import { ImpressumComponent } from './pages/impressum';
import { AgbsComponent } from './pages/agbs';

export const routes: Routes = [
    { path: '', component: ReittherapieComponent},
    { path: 'leistungen', component: LeistungenComponent},
    { path: 'about', component: AboutComponent},
    { path: 'tierische-therapeuten', component: TierischeTherapeutenComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'impressum', component: ImpressumComponent},
    { path: 'agbs', component: AgbsComponent},

    // for all else redirect to the home page
    { path: '**', redirectTo: '' }
];
