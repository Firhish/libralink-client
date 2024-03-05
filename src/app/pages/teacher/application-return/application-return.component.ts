import { Component, OnInit, inject } from '@angular/core';
import { LoanDetailService } from '../../../service/loanDetail.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LoanDetail } from '../../../model/loanDetail';

@Component({
  selector: 'app-application-return',
  standalone: true,
  imports: [
    HttpClientModule, TableModule, 
    CommonModule, ButtonModule
  ],
  providers: [LoanDetailService],
  templateUrl: './application-return.component.html',
  styleUrl: './application-return.component.scss'
})
export class ApplicationReturnComponent implements OnInit{

  loanDetails: LoanDetail[] = [];
  loanDetailService: LoanDetailService = inject(LoanDetailService);

  ngOnInit(): void {
    this.getLoanDetails();
  }

  getLoanDetails(){
    this.loanDetailService.getLoanDetails().subscribe((loanDetails)=>{
      this.loanDetails = loanDetails;
    })
  }

}
