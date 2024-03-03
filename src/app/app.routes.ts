import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [

    {
        path: '',
        component: LandingComponent,
        title: 'Landing'
    },

    {
        path: 'about',
        component: AboutComponent,
        title: 'About'
    }
];
