import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule,ButtonModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
  cardArray = [

    {
      header: "Firdaus",
      subheader: "Project Manager",
      imageUrl: "../../../assets/daus.png"
    },
    {
      header: "Yumni",
      subheader: "Version Control Supervisor",
      imageUrl: "../../../assets/mini.png"
    },
    {
      header: "Salwa",
      subheader: "Database Designer",
      imageUrl: "../../../assets/salwa_cat.png"
    },
    {
      header: "Dina",
      subheader: "Cat Coder",
      imageUrl: "../../../assets/dina.png"
    }
  ]

}
