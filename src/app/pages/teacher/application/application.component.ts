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

@Component({
  selector: 'app-teacher-application',
  standalone: true,
  imports: [ 
    ButtonModule, CommonModule, CardModule, 
    HttpClientModule, TableModule
  ],
  providers: [LoanDetailService, BookService],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class TeacherApplicationComponent implements OnInit{

  loanDetails: LoanDetail[] = [];
  loanDetailService: LoanDetailService = inject(LoanDetailService);
  
  books: Book[] = [];
  bookService: BookService = inject(BookService); 

  ngOnInit(): void {
    this.getLoanDetails();
    this.getBooks();
  }

  getLoanDetails(){
    this.loanDetailService.getLoanDetails().subscribe((loanDetails)=>{
      this.loanDetails = loanDetails;
      this.populateBookTitles();
    })
  }

  getBooks(){
    this.bookService.getBooks().subscribe((books)=>{
      this.books = books;
    })
  }

  populateBookTitles() {
    for (let loanDetail of this.loanDetails) {
      loanDetail.title = this.getBookTitle(loanDetail.bookId);
    }
  }
    
  getBookTitle(bookId: number): String {
    const book = this.books.find(b => b.bookId === bookId);
    return book ? book.title : '';
  }
 

  // cardArray = [
  
  //   {
  //     header: "Firdaus",
  //     subheader: "Project Manager",
  //     imageUrl: "../../../assets/daus.png"
  //   },
  //   {
  //     header: "Yumni",
  //     subheader: "Version Control Supervisor",
  //     imageUrl: "../../../assets/mini.png"
  //   },
  //   {
  //     header: "Salwa",
  //     subheader: "Database Designer",
  //     imageUrl: "../../../assets/salwa_cat.png"
  //   },
  //   {
  //     header: "Dina",
  //     subheader: "Cat Coder",
  //     imageUrl: "../../../assets/dina.png"
  //   }
  // ]

}
