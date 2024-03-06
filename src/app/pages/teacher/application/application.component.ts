import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoanDetailService } from '../../../service/loanDetail.service';
import { BookService } from '../../../service/book.service';
import { LoanDetail } from '../../../model/loanDetail';
import { Book } from '../../../model/book';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { TeacherHeaderComponent } from "../../../components/teacher/teacher-header/teacher-header.component";

@Component({
    selector: 'app-teacher-application',
    standalone: true,
    providers: [LoanDetailService, BookService, UserService],
    templateUrl: './application.component.html',
    styleUrl: './application.component.scss',
    imports: [
        ButtonModule, CommonModule, CardModule,
        HttpClientModule, TableModule,
        TeacherHeaderComponent
    ]
})
export class TeacherApplicationComponent implements OnInit{

  userId: string | null = null;
  currUser!:any;

  loanDetails: LoanDetail[] = [];
  loanDetailService: LoanDetailService = inject(LoanDetailService);
  
  books: Book[] = [];
  bookService: BookService = inject(BookService); 

  users: User[] = [];
  userService: UserService = inject(UserService);
  

  ngOnInit(): void {
    this.getLoanDetails();
    this.getBooks();
    this.getUsers();
  }

  getLoanDetails(){
    this.loanDetailService.getLoanDetails().subscribe((loanDetails)=>{
      this.loanDetails = loanDetails;
      this.populateBookTitles();
      this.populateUserUsername();
    })
  }

  getBooks(){
    this.bookService.getBooks().subscribe((books)=>{
      this.books = books;
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe((users)=>{
      this.users = users;
    })
  }

  populateBookTitles() {
    for (let loanDetail of this.loanDetails) {
      loanDetail.title = this.getBookTitle(loanDetail.bookId);
    }
  }

  populateUserUsername() {
    for (let loanDetail of this.loanDetails) {
      loanDetail.username = this.getUserUsername(loanDetail.userId);
    }
  }
    
  getBookTitle(bookId: number): String {
    const book = this.books.find(b => b.bookId === bookId);
    return book ? book.title : '';
  }

  getUserUsername(userId: number): String {
    const user = this.users.find(b => b.userId === userId);
    return user ? user.username : '';
  }

  acceptLoan(loanId: number) {
    this.loanDetailService.updateStatus(loanId, 'APPROVED').subscribe(() => {
      // Update loanDetails after status is updated
      this.getLoanDetails();
    });
  }

  rejectLoan(loanId: number) {
    this.loanDetailService.updateStatus(loanId, 'REJECTED').subscribe(() => {
      // Update loanDetails after status is updated
      this.getLoanDetails();
    });
  }
 
}
