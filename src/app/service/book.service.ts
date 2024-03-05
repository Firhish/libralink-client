import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  serverHost = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.serverHost + "/book/get-all")
  }

  getBookById(id:string|null): Observable<any>{
    return this.http.get<any>(this.serverHost + "/book/get-by-id/" + id)
  }

  addBook(book: any): Observable<any>{
    return this.http.post(this.serverHost + "/book/add", book);
  }

  // updateBook(bookId:string|null): Observable<any>{
  //   return this.http.put(this.serverHost + "/book/update-info-by-id/" + bookId)
  // }
  
  // updateBook(bookId: string | null, book: Book): Observable<any> {
  //   return this.http.put(this.serverHost + "/book/update-info-by-id/" + bookId, book)
  // }

  deleteBook(id:string|null): Observable<any>{
    return this.http.delete<any>(this.serverHost + "/book/delete-by-id/" + id)
  }
}
