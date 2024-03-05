import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BookService } from '../../../service/book.service';
import { BookgenreService } from '../../../service/bookgenre.service';
import { GenreService } from '../../../service/genre.service';
import { PublisherService } from '../../../service/publisher.service';
import { Book } from '../../../model/book';
import { Bookgenre } from '../../../model/bookgenre';
import { Genre } from '../../../model/genre';
import { Publisher } from '../../../model/publisher';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [HttpClientModule, TableModule, CommonModule, ButtonModule],
  providers: [BookService, BookgenreService, GenreService, PublisherService],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  bookService: BookService = inject(BookService);

  bookgenres: Bookgenre[] = [];
  bookgenreService: BookgenreService = inject(BookgenreService);

  genres: Genre[] = [];
  genreService: GenreService = inject(GenreService);

  publishers: Publisher[] = [];
  publisherService: PublisherService = inject(PublisherService);
  
  ngOnInit(): void {
    this.getBooks();
    this.getBookgenres();
    this.getGenres();
    this.getPublishers();
  }

  getBooks(){
    this.bookService.getBooks().subscribe((books)=>{
      this.books = books;
      this.populatePublisherName;
      this.populateGenre;
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

  populatePublisherName(){
    for (let book of this.books) {
      book.name = this.getPublisherName(book.publisherId);
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
    return genre ? genre.namegenre : '';
  }

  populateGenre(){
    for (let bookgenre of this.bookgenres){ 
      bookgenre.namegenre = this.getGenreName(bookgenre.genreId); 
    }
  }

}
