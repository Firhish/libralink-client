import { Component, OnInit } from '@angular/core';
import { StudentsHeaderComponent } from '../../../components/student/students-header/students-header.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-penalty-list',
  standalone: true,
  imports: [
    HttpClientModule,
    TableModule,
    ButtonModule,
    StudentsHeaderComponent,
    CommonModule,
  ],
  templateUrl: './student-penalty-list.component.html',
  styleUrl: './student-penalty-list.component.scss'
})
export class StudentPenaltyListComponent implements OnInit {

  currUserId: string|null=null;

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.currUserId = this.route.snapshot.paramMap.get('currUserId');
  }

 

}
