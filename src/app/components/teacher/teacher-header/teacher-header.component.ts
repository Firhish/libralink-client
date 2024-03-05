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
      command: () => this.navigateToBookList(),
    },
    {
      label: 'Student Application',
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
    this.router.navigate(['teacher/book-list',{currUserId}]);
  }

  private navigateToYourApplication() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['teacher/application',{currUserId}]);
  }


}
