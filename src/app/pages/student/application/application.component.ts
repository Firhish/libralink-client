import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanDetailService } from '../../../service/loanDetail.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BookService } from '../../../service/book.service';
import { StudentsHeaderComponent } from '../../../components/student/students-header/students-header.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-student-application',
  standalone: true,
  imports: [
    HttpClientModule,
    TableModule,
    ButtonModule,
    StudentsHeaderComponent,
    CommonModule,
    DialogModule,
  ],
  providers:[LoanDetailService,BookService],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class StudentApplicationComponent implements OnInit{

  currUserId: string|null=null;
  loanDetailsByUserId: any[] = [];
  allBooks:any[] = [];
  visible: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute,private loanDetailService: LoanDetailService, private bookService:BookService){}

  ngOnInit(): void {
    this.currUserId = this.route.snapshot.paramMap.get('currUserId');
    this.getAllBooks(); 
    this.getAllLoanDetailsByUserId(this.currUserId);
  }

  getAllLoanDetailsByUserId(id:string|null): void{
    this.loanDetailService.getAllLoanDetailsByUserId(id).subscribe((res)=>{
      this.loanDetailsByUserId = res;
      this.populateBookTitle();
      console.log(this.loanDetailsByUserId);
    })
  }

  getAllBooks(): void{
    this.bookService.getBooks().subscribe((res)=>{
      this.allBooks = res;
      console.log(this.allBooks);
    })
  }

  populateBookTitle() {
    for (let loanDetail of this.loanDetailsByUserId) {
      loanDetail.bookTitle = this.getBookTitle(loanDetail.bookId);
    }
  }

  getBookTitle(bookId: number): String {
    const book = this.allBooks.find(b => b.bookId === bookId);
    return book ? book.title : '';
  }

  onClick(loan:any){
    const idLoanToDelete = loan.loanId;
    // alert(idLoanToDelete);
    alert("Are you sure want to delete the loan application?")
    this.loanDetailService.deleteById(idLoanToDelete).subscribe((res)=>{
      console.log(res);
      window.location.reload();
    })
    
  }

  navigateToBookList() {
    const currUserId = this.currUserId;
    console.log(currUserId);
    this.router.navigate(['student/book-list',{currUserId}]);
  }
}
