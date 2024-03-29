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
      label: 'Application',
      items: [
        {
          label: "Active Application",
          command: () => this.navigateToActiveApplication(),
        },
        {
          label: "Penalty",
          command: () => this.navigateToPenalty(),
        }
      ]
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

  private navigateToActiveApplication() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['student/application',{currUserId}]);
  }

  private navigateToPenalty() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['student/penalty',{currUserId}]);
  }

  navigateToLandingPage() {
    alert("Are you sure want to logout?")
    this.router.navigate(['']);
  }

  navigateToProfilePage() {
    const currUserId = this.currUserId;
    this.router.navigate(['student/profile',{currUserId}]);
  }

  
}
