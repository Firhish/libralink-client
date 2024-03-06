import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-teacher-header',
  standalone: true,
  imports: [
    MenubarModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './teacher-header.component.html',
  styleUrl: './teacher-header.component.scss'
})
export class TeacherHeaderComponent {
  @Input() currUserId!: any;

  constructor(private router: Router){}

  items = [
    {
      label: 'Book List',
      items: [
        {
          label: 'Book List',
          command: () => this.navigateToBookList(),
        },
        {
          label: 'Add Book List',
          command: () => this.navigateToFormList(),
        }
      ]
    },
    {
      label: 'Student Application',
      items: [ // Submenu (optional)
      {
        label: 'Application',
        command: () => this.navigateToStudentApplication(),
      },
      {
        label: 'Loan Details',
        command: () => this.navigateToApplicationReturn(),
      },
      {
        label: 'Penalty List',
        command: () => this.navigateToApplicationPenalty(),
      },
      ],
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
    this.router.navigate(['teacher/book-list',{currUserId}]);
  }

  private navigateToFormList() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['teacher/book-list/form',{currUserId}]);
  }

  private navigateToStudentApplication() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['teacher/application',{currUserId}]);
  }

  private navigateToApplicationReturn() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['teacher/application-return', { currUserId }]);
  }

  private navigateToApplicationPenalty() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['teacher/application-penalty', { currUserId }]);
  }

  navigateToLoginPage() {
    alert("Are you sure want to logout?")
    this.router.navigate(['/login']);
  }

}
