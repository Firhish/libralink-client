import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';

// welcome
import { StudentWelcomeComponent } from './pages/student/welcome/welcome.component';
import { TeacherWelcomeComponent } from './pages/teacher/welcome/welcome.component';
import { AdminWelcomeComponent } from './pages/admin/welcome/welcome.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [

    {
        path: '',
        component: LandingComponent,
        title: 'Landing'
    },

    {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    },

    {
        path: 'about',
        component: AboutComponent,
        title: 'About'
    },

    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'student/welcome',
        component: StudentWelcomeComponent,
        title: 'Student Welcome'
    },
    {
        path: 'teacher/welcome',
        component: TeacherWelcomeComponent,
        title: 'Teacher Welcome'
    },
    {
        path: 'admin/welcome',
        component: AdminWelcomeComponent,
        title: 'Admin Welcome'
    }


];
