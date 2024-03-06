import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BookService } from '../../../service/book.service';
import { BookgenreService } from '../../../service/bookgenre.service';
import { GenreService } from '../../../service/genre.service';
import { PublisherService } from '../../../service/publisher.service';
import { LocationService } from '../../../service/location.service';
import { Book } from '../../../model/book';
import { Bookgenre } from '../../../model/bookgenre';
import { Genre } from '../../../model/genre';
import { Publisher } from '../../../model/publisher';
import { Location } from '../../../model/location';
import { TeacherHeaderComponent } from '../../../components/teacher/teacher-header/teacher-header.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [HttpClientModule, TableModule, CommonModule, ButtonModule,TeacherHeaderComponent],
  providers: [BookService, BookgenreService, GenreService, PublisherService, LocationService],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {

  userId: string | null = null;
  currUser!:any;
  
  books: Book[] = [];
  bookService: BookService = inject(BookService);

  bookgenres: Bookgenre[] = [];
  bookgenreService: BookgenreService = inject(BookgenreService);

  genres: Genre[] = [];
  genreService: GenreService = inject(GenreService);

  publishers: Publisher[] = [];
  publisherService: PublisherService = inject(PublisherService);
  
  locations: Location[] = [];
  locationService: LocationService = inject(LocationService);

  ngOnInit(): void {
    this.getBooks();
    this.getBookgenres();
    this.getGenres();
    this.getPublishers();
    this.getLocations();
  }

  getBooks(){
    this.bookService.getBooks().subscribe((books)=>{
      this.books = books;
      this.populatePublisher;
      this.populateGenreName;
      this.populateLocation;
    })

  }

  getPublishers(){
    this.publisherService.getPublishers().subscribe((publishers)=>{
      this.publishers = publishers;
    })
  }

  getPublisherName(publisherId: number): String {
    const publisher = this.publishers.find(b => b.publisherId === publisherId);
    return publisher ? publisher.name : '';
  }

  getPublisherAddress(publisherId: number): String {
    const publisher = this.publishers.find(b => b.publisherId === publisherId);
    return publisher ? publisher.address : '';
  }

  getPublisherPhonenumber(publisherId: number): String {
    const publisher = this.publishers.find(b => b.publisherId === publisherId);
    return publisher ? publisher.phoneNumber : '';
  }

  populatePublisher(){
    for (let book of this.books) {
      book.name = this.getPublisherName(book.publisherId);
      book.address = this.getPublisherAddress(book.publisherId);
      book.phoneNumber = this.getPublisherPhonenumber(book.publisherId);
    }
  }

  getBookgenres(){
    this.bookgenreService.getBookgenres().subscribe((bookgenres)=>{
      this.bookgenres = bookgenres;
    })
  }

  getGenres(){
    this.genreService.getGenres().subscribe((genres)=>{
      this.genres = genres;
    })
  }

  getGenreName(genreId: number): String{
    const genre = this.genres.find(b => b.genreId === genreId);
    return genre ? genre.name : '';
  }

  populateGenreName(){
    for (let bookgenre of this.bookgenres){ 
      bookgenre.name = this.getGenreName(bookgenre.genreId); 
    }
  }

  getLocations() {
    this.locationService.getLocations().subscribe((locations)=>{
      this.locations = locations;
    })
  }
  
  getLocationShelfNumber(locationId: number): String {
    const location = this.locations.find(b => b.locationId === locationId);
    return location ? location.shelfNumber : '';
  }

  getLocationFloorNumber(locationId: number): String {
    const location = this.locations.find(b => b.locationId === locationId);
    return location ? location.floorNumber : '';
  }

  populateLocation(){
    for (let book of this.books) {
      book.shelfNumber = this.getLocationShelfNumber(book.locationId);
      book.floorNumber = this.getLocationFloorNumber(book.locationId);
    }
  }

  onClick(book:any){
    const idBookToDelete = book.bookId;
    // alert(idLoanToDelete);
    this.bookService.deleteBook(idBookToDelete).subscribe((res)=>{
      console.log(res);
      window.location.reload();
    })
    // // alert("Are you sure want to delete the loan application?")
    // const idBookToDelete = book.loanId;
    // // alert(idLoanToDelete);
    // this.loanDetailService.deleteById(idLoanToDelete).subscribe((res)=>{
    //   console.log(res);
    //   window.location.reload();
    // })
    // ale
  }

  // deleteById(id:string):Observable<any>{
  //   return this.http.delete(this.serverHost + "/loan-detail/delete-by-id/" + id);
  // }

}
