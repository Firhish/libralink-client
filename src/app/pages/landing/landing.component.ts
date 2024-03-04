import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutComponent } from '../about/about.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ButtonModule,
    HeaderComponent,
    AboutComponent,
    RouterModule,
    DialogModule,
    CommonModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  
  visible: boolean = true;

  showDialog() {
      this.visible = true;
  }

  closeDialog() {
      this.visible = false;
  }

  items = [
    {
      label: 'Learn More',
      items: [ // Submenu (optional)
        {
          label: 'About Us',
          routerLink: ['/about'],
        },
      ],
    },
  ];

}
