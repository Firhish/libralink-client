import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BookService } from '../../../service/book.service';
import { LocationService } from '../../../service/location.service';
import { PublisherService } from '../../../service/publisher.service';
import { Router } from '@angular/router';
import { TeacherHeaderComponent } from '../../../components/teacher/teacher-header/teacher-header.component';

@Component({
  selector: 'app-book-list-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule,ButtonModule,TeacherHeaderComponent],
  providers: [BookService, LocationService, PublisherService],
  templateUrl: './book-list-form.component.html',
  styleUrl: './book-list-form.component.scss'
})
export class BookListFormComponent implements OnInit {

  userId: string | null = null;
  currUser!:any;
  
  bookListCreateForm!: FormGroup;

  constructor(private bookService: BookService, private locationService: LocationService,private publisherService: PublisherService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.bookListCreateForm = this.fb.group({
      title: [null, [Validators.required]],
      author: [null, [Validators.required]],
      genre: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      availableQuantity: [null, [Validators.required]],
      publishedDate: [null, [Validators.required]],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      shelfNumber: [null, [Validators.required]],
      floorNumber: [null, [Validators.required]],
    })
  }

  onSubmit(){
    const name = this.bookListCreateForm.value.name;
    const address = this.bookListCreateForm.value.address;
    const phoneNumber = this.bookListCreateForm.value.phoneNumber;
    const shelfNumber = this.bookListCreateForm.value.shelfNumber;
    const floorNumber = this.bookListCreateForm.value.floorNumber;
    console.log(name);
    console.log(address);
    console.log(phoneNumber);
    console.log(shelfNumber);
    console.log(floorNumber);

    this.bookService.addBook(this.bookListCreateForm.value).subscribe((res)=>{
      if(res != null){
        const publisherId = res.publisherId;
        console.log(res);
        const publisherData = {"publisherId": publisherId, "name": name, "address": address, "phoneNumber": phoneNumber}

        this.publisherService.addPublisher(publisherData).subscribe((res2) => {
          if(res2 != null){

            if(res != null){

              const locationId = res.locationId;
              console.log(res);
              const locationData = {"locationId": locationId,"shelfNumber": shelfNumber, "floorNumber": floorNumber}
              this.locationService.addLocation(locationData).subscribe((res3)=>{

                alert("You were successfully registered!");
                console.log(res3);

              })

            }
          }
        })
      }
    })

  }

}
