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
import { TeacherApplicationComponent } from './pages/teacher/application/application.component';
import { ApplicationReturnComponent } from './pages/teacher/application-return/application-return.component';
import { TeacherProfileComponent } from './pages/teacher/profile/profile.component';
import { StudentProfileComponent } from './pages/student/profile/profile.component';
import { StudentBookListComponent } from './pages/student/book-list/book-list.component';
import { StudentApplicationComponent } from './pages/student/application/application.component';
import { ApplicationPenaltyComponent } from './pages/teacher/application-penalty/application-penalty.component';

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
        path: 'student/book-list',
        component: StudentBookListComponent,
        title: 'Student Book List'
    },
    {
        path: 'student/application',
        component: StudentApplicationComponent,
        title: 'Student Application'
    },
    {
        path: 'student/profile',
        component: StudentProfileComponent,
        title: 'Student Profile'
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
    },
    {
        path: 'teacher/application',
        component: TeacherApplicationComponent,
        title: 'Teacher Application'
    },
    {
        path: 'teacher/application-return',
        component: ApplicationReturnComponent,
        title: 'Teacher Application: Return Status'
    },
    {
        path: 'teacher/application-penalty',
        component: ApplicationPenaltyComponent,
        title: 'Teacher Application: Penalty Status'
    },
    {
        path: 'teacher/profile',
        component: TeacherProfileComponent,
        title: 'Teacher Profile'
    }


];
