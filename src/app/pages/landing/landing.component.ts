import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutComponent } from '../about/about.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonModule,HeaderComponent,AboutComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  items = [
    {
      label: 'Learn More',
      items: [ // Submenu (optional)
        {
          label: 'Our Team',
          routerLink: ['/about'],
        },
        {
          label: 'Our Mission',
          routerLink: ['/about/mission'],
        },
      ],
    },
  ];

}
