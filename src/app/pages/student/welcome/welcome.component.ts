import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsHeaderComponent } from '../../../components/student/students-header/students-header.component';
import { UserService } from '../../../service/user.service';
import { StudentService } from '../../../service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../../model/user';

@Component({
  selector: 'app-student-welcome',
  standalone: true,
  imports: [
    StudentsHeaderComponent,
    HttpClientModule
  ],
  providers: [
    UserService,
    StudentService
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class StudentWelcomeComponent implements OnInit {

  userId: string | null = null;
  currUser!:any;

  constructor(private route: ActivatedRoute,private userService: UserService,private studentService: StudentService){}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getUserById(this.userId);
  }

  getUserById(id:string|null): void{
    this.userService.getUserById(id).subscribe((user)=>{
      console.log(user);
      this.currUser = user;
    })
    
  }

}
