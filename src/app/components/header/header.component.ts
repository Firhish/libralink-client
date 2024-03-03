import { Component, Input } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() items!: { label: string; items: { label: string; routerLink: string[]; }[]; }[];
}
