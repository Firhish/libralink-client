import { Component, Input  } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [
    MenubarModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent {
  @Input() currUserId!: any;

  constructor(private router: Router){}

  items = [
    {
      label: 'Student List',
      command: () => this.navigateToStudentList()
    },
    {
      label: 'Teacher List',
      command: () => this.navigateToTeacherList()
    }
  ];


  // navigateToWelcome() {
  //   const currUserId = this.currUserId;
  //   console.log(currUserId);
  //   this.router.navigate(['student/welcome',{currUserId}]);
  // }

  private navigateToStudentList() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['admin/student-list',{currUserId}]);
  }

  private navigateToTeacherList() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['admin/teacher-list',{currUserId}]);
  }

  

}
