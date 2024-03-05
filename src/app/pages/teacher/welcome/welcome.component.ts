import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { TeacherService } from '../../../service/teacher.service';
import { ActivatedRoute } from '@angular/router';
import { TeacherHeaderComponent } from "../../../components/teacher/teacher-header/teacher-header.component";

@Component({
    selector: 'app-welcome',
    standalone: true,
    providers: [
        UserService,
        TeacherService
    ],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss',
    imports: [
        TeacherWelcomeComponent,
        HttpClientModule,
        TeacherHeaderComponent
    ]
})
export class TeacherWelcomeComponent implements OnInit{

  userId: string | null = null;
  currUser!:any;

  constructor(private route: ActivatedRoute,private userService: UserService,private teacherService: TeacherService){}

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
