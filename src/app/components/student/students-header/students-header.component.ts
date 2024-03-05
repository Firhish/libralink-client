import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-students-header',
  standalone: true,
  imports: [
    MenubarModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './students-header.component.html',
  styleUrl: './students-header.component.scss'
})
export class StudentsHeaderComponent {
  @Input() currUserId!: any;

  constructor(private router: Router){}

  items = [
    {
      label: 'Book List',
      command: () => this.navigateToBookList(),
    },
    {
      label: 'Your Application',
      command: () => this.navigateToYourApplication(),
    },
  ];

  // navigateToWelcome() {
  //   const currUserId = this.currUserId;
  //   console.log(currUserId);
  //   this.router.navigate(['student/welcome',{currUserId}]);
  // }

  private navigateToBookList() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['student/book-list',{currUserId}]);
  }

  private navigateToYourApplication() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['student/application',{currUserId}]);
  }

  
}
