import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../../model/user';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  imports: [ButtonModule, CommonModule, CardModule, HttpClientModule,],
  providers: [UserService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class TeacherProfileComponent implements OnInit{

  users: User[] = [];
  userService: UserService = inject(UserService);
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((users)=>{
      this.users = users;
    })
  }

}
