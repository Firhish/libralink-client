import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginUserForm!: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginUserForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.loginUserForm.value);
    this.userService.loginByEmailAndPassword(this.loginUserForm.value).subscribe((res) => {

      if (res != null) {
        const userId = res.userId;
        if (res.role == "student") {
          alert("Login successfully!");
          this.router.navigate(['student/welcome',{userId}]);
          // this.router.navigate(['student/application',{userId}]);
        } else if (res.role == "teacher") {
          alert("Login successfully!");
          // this.router.navigate(['teacher/welcome',{userId}]);
          this.router.navigate(['teacher/application',{userId}]);
        } else {
          alert("Login successfully!");
          this.router.navigate(['admin/welcome',{userId}]);
        }
      } else {
        alert("User not found, Please enter correct email and password!");
      }
      console.log(res);
    })
  }
}


