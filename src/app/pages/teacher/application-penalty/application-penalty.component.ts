import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { LoanDetailService } from '../../../service/loanDetail.service';
import { UserService } from '../../../service/user.service';
import { StudentService } from '../../../service/student.service';
import { BookService } from '../../../service/book.service';
import { LoanDetail } from '../../../model/loanDetail';
import { User } from '../../../model/user';
import { Student } from '../../../model/student';
import { Book } from '../../../model/book';
import { Penalty } from '../../../model/penalty';
import { PenaltyService } from '../../../service/penalty.service';
import { TeacherHeaderComponent } from "../../../components/teacher/teacher-header/teacher-header.component";

@Component({
    selector: 'app-application-penalty',
    standalone: true,
    providers: [LoanDetailService, UserService, StudentService, BookService, PenaltyService],
    templateUrl: './application-penalty.component.html',
    styleUrl: './application-penalty.component.scss',
    imports: [
        HttpClientModule, TableModule,
        CommonModule, ButtonModule,
        TeacherHeaderComponent
    ]
})
export class ApplicationPenaltyComponent implements OnInit{

  userId: string | null = null;
  currUser!:any;

  loanDetails: LoanDetail[] = [];
  loanDetailService: LoanDetailService = inject(LoanDetailService);

  users: User[] = [];
  userService: UserService = inject(UserService);

  students: Student[] = [];
  studenService: StudentService = inject(StudentService);

  books: Book[] = [];
  bookService: BookService = inject(BookService);

  penalties: Penalty[] = [];
  penaltyService: PenaltyService = inject(PenaltyService);

  ngOnInit(): void {
    this.getLoanDetails();
    this.getUsers();
    this.getStudents();
    this.getBooks();
    this.getPenalties();
  }

  getLoanDetails(){
    this.loanDetailService.getLoanDetails().subscribe((loanDetails)=>{
      this.loanDetails = loanDetails;
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe((users)=>{
      this.users = users;
    })
  }

  getStudents(){
    this.studenService.getUsers().subscribe((students)=>{
      this.students = students;
    })
  }

  getBooks(){
    this.bookService.getBooks().subscribe((books)=>{
      this.books = books;
    })
  }

  getPenalties(){
    this.penaltyService.getPenalties().subscribe((penalties)=>{
      this.penalties = penalties;
      this.populateUserUsername();
      this.populateStudentGrade(); 
      this.populateBookTitles();
    })
  }

  populateUserUsername() {
    for (let loanDetail of this.loanDetails) {
      loanDetail.username = this.getUserUsername(loanDetail.userId);
    }
  }

  populateStudentGrade(){
    for (let user of this.users){
      user.grade = this.getStudentGrade(user.userId);
    }
  }

  populateBookTitles() {
    for (let loanDetail of this.loanDetails) {
      loanDetail.title = this.getBookTitle(loanDetail.bookId);
    }
  }

  getUserUsername(userId: number): String {
    const user = this.users.find(b => b.userId === userId);
    return user ? user.username : '';
  }

  getStudentGrade(userId: number): String{
    const student = this.students.find(b => b.userId === userId);
    return student ? student.grade : '';
  }

  getBookTitle(bookId: number): String {
    const book = this.books.find(b => b.bookId === bookId);
    return book ? book.title : '';
  }

  payLoan(penaltyId: number) {
    this.penaltyService.updatePaymentStatusById(penaltyId).subscribe(() => {
      this.getPenalties();
    });
  }

  // payLoan(penaltyId: number) {
  //   this.penaltyService.updatePaymentStatusById(penaltyId, true).subscribe(() => {
  //     this.getPenalties();
  //   });
  // }

  
}
