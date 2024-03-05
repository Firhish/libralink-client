import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private studentService: StudentService, private fb: FormBuilder, private router: Router) { }

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
  }

  onSubmit() {

    const grade = this.registerUserForm.value.grade;
    const email = this.registerUserForm.value.email;
    const password = this.registerUserForm.value.password;
    const loginData = { "email": email, "password": password };
    console.log(grade);

    // add to users table
    this.userService.addUser(this.registerUserForm.value).subscribe((res) => {

      if (res != null) {
        const userId = res.userId;
        console.log(res);
        const studentData = { "userId": userId, "grade": grade }

        // add to students table
        this.studentService.addStudent(studentData).subscribe((res2) => {

          if (res2 != null) {
            alert("You were successfully registered!");
            console.log(res2);

            // login
            this.userService.loginByEmailAndPassword(loginData).subscribe((res) => {

              if (res != null) {
                const userId = res.userId;
                this.router.navigate(['student/welcome', { userId }]);
              }
            })
          }
        })
      }


    })
  }
}
