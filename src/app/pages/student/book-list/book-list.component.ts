import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { StudentsHeaderComponent } from '../../../components/student/students-header/students-header.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from '../../../service/student.service';
import { BookService } from '../../../service/book.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PublisherService } from '../../../service/publisher.service';
import { LoanDetailService } from '../../../service/loanDetail.service';

@Component({
  selector: 'app-student-book-list',
  standalone: true,
  imports: [
    StudentsHeaderComponent,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  providers: [
    UserService,
    StudentService,
    BookService,
    PublisherService,
    LoanDetailService
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class StudentBookListComponent implements OnInit {

  allBooks:any[] = [];
  allPublishers:any[] = [];

  currUserId: string|null=null;
  constructor(private route: ActivatedRoute,private bookService:BookService,private publisherService:PublisherService,private loanDetailService:LoanDetailService){}

  ngOnInit(): void {
    this.currUserId = this.route.snapshot.paramMap.get('currUserId');
    this.getAllPublishers();
    this.getAllBooks();
  }

  getAllBooks(): void{
    this.bookService.getBooks().subscribe((res)=>{
      this.allBooks = res;
      this.populatePublisherName();
      console.log(this.allBooks);
    })
  }

  getAllPublishers(): void{
    this.publisherService.getPublishers().subscribe((res)=>{
      console.log(res);
      this.allPublishers = res;
    })
  }

  populatePublisherName() {
    for (let book of this.allBooks) {
      book.publisherName = this.getPublisherName(book.publisherId);
    }
  }

  getPublisherName(publisherId: number): String {
    const publisher = this.allPublishers.find(p => p.publisherId === publisherId);
    return publisher ? publisher.name : '';
  }

  onClick(book:any){
    this.loanDetailService.addLoanDetails({"userId":this.currUserId,"bookId":book.bookId}).subscribe((res)=>{
      if(res !=null){
        alert("Your application was successfully created!");
      }
      // console.log(res);
    })
  }

  

}
