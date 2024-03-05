import { Component, OnInit, inject } from '@angular/core';
import { LoanDetailService } from '../../../service/loanDetail.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LoanDetail } from '../../../model/loanDetail';
import { UserService } from '../../../service/user.service';
import { StudentService } from '../../../service/student.service';
import { BookService } from '../../../service/book.service';
import { User } from '../../../model/user';
import { Student } from '../../../model/student';
import { Book } from '../../../model/book';
import { TeacherHeaderComponent } from "../../../components/teacher/teacher-header/teacher-header.component";

@Component({
    selector: 'app-application-return',
    standalone: true,
    providers: [LoanDetailService, UserService, StudentService, BookService],
    templateUrl: './application-return.component.html',
    styleUrl: './application-return.component.scss',
    imports: [
        HttpClientModule, TableModule,
        CommonModule, ButtonModule,
        TeacherHeaderComponent
    ]
})
export class ApplicationReturnComponent implements OnInit{

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

  ngOnInit(): void {
    this.getLoanDetails();
    this.getUsers();
    this.getStudents();
    this.getBooks();
  }

  getLoanDetails(){
    this.loanDetailService.getLoanDetails().subscribe((loanDetails)=>{
      this.loanDetails = loanDetails;
      this.populateUserUsername();
      this.populateStudentGrade(); 
      this.populateBookTitles();
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

  // returnBook(loanId: number) {
  //   // Assuming you have a method in your LoanDetailService to update return date by ID
  //   this.loanDetailService.updateReturnDate(loanId).subscribe(() => {
  //     // Optional: You may want to reload the loan details after updating the return date
  //     this.getLoanDetails();
  //   // }, error => {
  //   //   // Handle error if any
  //   //   console.error('Error returning book:', error);
  //   });
  // }

  // returnBook(loanId: number) {
  //   const currentDate = new Date(); // Get the current date
  //   this.loanDetailService.updateReturnDate(loanId, currentDate).subscribe(() => {
  //     this.getLoanDetails();
  //   });
  // }

  returnBook(loanDetail: LoanDetail): void {
    // Call the service method to update the return date
    this.loanDetailService.updateReturnDate(loanDetail.loanId)
      .subscribe(updatedLoanDetail => {
        // Update the return date in the loanDetail object
        loanDetail.returnDate = updatedLoanDetail.returnDate;
        // Optionally, update any other properties as needed
      });
  }


}

