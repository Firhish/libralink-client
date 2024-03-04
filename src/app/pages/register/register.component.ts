import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [UserService, StudentService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerUserForm!: FormGroup;
  // studentData = {};
  // registerStudentForm!: FormGroup;

  constructor(private userService: UserService, private studentService: StudentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerUserForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      role: ['student', [Validators.required]],
      grade: [null, [Validators.required]]
    });

    // this.registerStudentForm = this.fb.group({
    //   grade: [null, [Validators.required]]
    // })

  }

  registerUser(){
    this.userService.addUser(this.registerUserForm.value).subscribe((res) => {
      console.log(res);
      alert("You were successfully registered!")
    })
  }

  // registerStudent(){
  //   this.studentService.addStudent(this.studentData).subscribe((res) => {
  //     console.log(res);
  //     alert("You have registered successfully!")
  //   })
  // }

  // onSubmit() {
  //   this.registerUser();
  //   this.registerStudent();
  // }

}
