import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
//import { CommonModule } from '@angular/common';
import { AdminService } from '../../../service/admin.service';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../../service/user.service';
import { StudentService } from '../../../service/student.service';
import { AdminHeaderComponent } from '../../../components/admin/admin-header/admin-header.component';



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    TableModule, 
    HttpClientModule, 
    AdminHeaderComponent,
    ButtonModule
  ],
  providers: [
    AdminService,
    UserService,
    StudentService
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {


  allStudents:any[] = [];
  allUsers:any[] = [];

  currUserId: string|null=null;
  constructor(private route: ActivatedRoute,private studentService: StudentService, private userService: UserService ){}


  ngOnInit(): void {
    this.currUserId = this.route.snapshot.paramMap.get('currUserId');
    this.getAllUsers();
    this.getAllStudents();
  }

  getAllStudents(): void{
    this.studentService.getStudents().subscribe((data) => {
      this.allStudents = data;
      this.populateUserName();
      this.populateName();
      this.populateEmail();
      this.populatePhoneNumber();
      console.log(this.allStudents);
    })
  }

  getAllUsers(): void{
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.allUsers = data;
    })
  }
  
  // Username
  populateUserName() {
    for (let student of this.allStudents) {
      student.username = this.getUserName(student.userId);
    }
  }

  getUserName(userId: number): String {
    const user = this.allUsers.find(p => p.userId === userId);
    return user ? user.username : '';
  }
  
  // name
  populateName() {
    for (let student of this.allStudents) {
      student.name = this.getName(student.userId);
    }
  }

  getName(userId: number): String {
    const user = this.allUsers.find(p => p.userId === userId);
    return user ? user.name : '';
  }

  // email
  populateEmail() {
    for (let student of this.allStudents) {
      student.email = this.getEmail(student.userId);
    }
  }

  getEmail(userId: number): String {
    const user = this.allUsers.find(p => p.userId === userId);
    return user ? user.email : '';
  }

  // phoneNumber
  populatePhoneNumber() {
    for (let student of this.allStudents) {
      student.phoneNumber = this.getPhoneNumber(student.userId);
    }
  }

  getPhoneNumber(userId: number): String {
    const user = this.allUsers.find(p => p.userId === userId);
    return user ? user.phoneNumber : '';
  }






 
}

