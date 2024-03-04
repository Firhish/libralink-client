import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    TableModule
  ],
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  
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
