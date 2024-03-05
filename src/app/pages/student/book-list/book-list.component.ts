import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { StudentsHeaderComponent } from '../../../components/student/students-header/students-header.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from '../../../service/student.service';

@Component({
  selector: 'app-student-book-list',
  standalone: true,
  imports: [
    StudentsHeaderComponent,
    HttpClientModule
  ],
  providers: [
    UserService,
    StudentService
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class StudentBookListComponent implements OnInit {

  currUserId: string|null=null;
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.currUserId = this.route.snapshot.paramMap.get('currUserId');
  }

}
