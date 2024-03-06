import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
//import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../../service/user.service';
import { TeacherService } from '../../../service/teacher.service';
import { DepartmentService } from '../../../service/department.service';
import { AdminHeaderComponent } from '../../../components/admin/admin-header/admin-header.component';
import { ConfirmationService, MessageService } from 'primeng/api'; // Import these for confirmation dialog


@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [
    TableModule, 
    HttpClientModule, 
    AdminHeaderComponent,
    ButtonModule
  ],
  providers: [
    UserService,
    TeacherService,
    DepartmentService,
    ConfirmationService,
    MessageService
  ],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.scss'
})
export class TeacherListComponent {

  allTeachers:any[] = [];
  allUsers:any[] = [];
  allDepartments: any[] = [];

  currUserId: string|null=null;
  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService, 
    private teacherService: TeacherService, 
    private userService: UserService,
    private confirmationService: ConfirmationService, // Inject ConfirmationService
    private messageService: MessageService // Inject MessageService
     ){}


  ngOnInit(): void {
    this.currUserId = this.route.snapshot.paramMap.get('currUserId');
    this.getAllUsers();
    this.getAllDepartments();
    this.getAllTeachers();
  }

  getAllTeachers(): void{
    this.teacherService.getTeachers().subscribe((data) => {
      this.allTeachers = data;
      this.populateUserName();
      this.populateTeacherName();
      this.populateDepartmentName();
      this.populateEmail();
      this.populatePhoneNumber();
      console.log(this.allTeachers);
    })
  }

  getAllUsers(): void{
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.allUsers = data;
    })
  }

  getAllDepartments(): void{
    this.departmentService.getDepartment().subscribe((data) => {
      console.log(data);
      this.allDepartments = data;
    })
  }
  
  // Username
  populateUserName() {
    for (let teacher of this.allTeachers) {
      teacher.username = this.getUserName(teacher.userId);
    }
  }

  getUserName(userId: number): String {
    const user = this.allUsers.find(p => p.userId === userId);
    return user ? user.username : '';
  }
  
  // name
  populateTeacherName() {
    for (let teacher of this.allTeachers) {
      teacher.teacherName = this.getTeacherName(teacher.userId);
    }
  }

  getTeacherName(userId: number): String {
    const user = this.allUsers.find(p => p.userId === userId);
    return user ? user.name : '';
  }

  // email
  populateEmail() {
    for (let teacher of this.allTeachers) {
      teacher.email = this.getEmail(teacher.userId);
    }
  }

  getEmail(userId: number): String {
    const user = this.allUsers.find(p => p.userId === userId);
    return user ? user.email : '';
  }

  // phoneNumber
  populatePhoneNumber() {
    for (let teacher of this.allTeachers) {
      teacher.phoneNumber = this.getPhoneNumber(teacher.userId);
    }
  }

  getPhoneNumber(userId: number): String {
    const user = this.allUsers.find(p => p.userId === userId);
    return user ? user.phoneNumber : '';
  }

  // department
  populateDepartmentName() {
    for (let teacher of this.allTeachers) {
      teacher.department = this.getDepartmentName(teacher.departmentId);
    }
  }

  getDepartmentName(departmentId: number): String {
    const department = this.allDepartments.find(p => p.departmentId === departmentId);
    return department ? department.name : '';
  }

  deleteTeacher(teacherId: number) {
    this.teacherService.deleteTeacher(teacherId).subscribe(() => {
      this.getAllTeachers(); // Refresh the list after deletion
    });
  }
}
  



