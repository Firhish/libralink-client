import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsHeaderComponent } from '../../../components/student/students-header/students-header.component';
import { UserService } from '../../../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from '../../../service/student.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [
    StudentProfileComponent,
    StudentsHeaderComponent,
    HttpClientModule,
    ButtonModule
  ],
  providers:[
    UserService,
    StudentService
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class StudentProfileComponent implements OnInit{
  
  currUserId: string|null=null;
  currUserData!: any;
  currStudentData!: any;
  dataToDisplay!: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private studentService: StudentService){}

  ngOnInit(): void {
    this.currUserId = this.route.snapshot.paramMap.get('currUserId');
    this.getUserById(this.currUserId);
    this.getStudentByUserId(this.currUserId);
  }

  getUserById(id:string|null): void{
    this.userService.getUserById(id).subscribe((user)=>{
      // console.log(user);
      this.currUserData = user;
    }) 
  }

  getStudentByUserId(id:string|null): void{
    this.studentService.getStudentByUserId(id).subscribe((student)=>{
      // console.log(student);
      this.currStudentData = student;
      this.populate();
    })
  }

  populate(){
    this.dataToDisplay = this.currUserData;
    this.dataToDisplay.grade = this.currStudentData.grade;
    this.dataToDisplay.studentId = this.currStudentData.studentId;
  }





}
