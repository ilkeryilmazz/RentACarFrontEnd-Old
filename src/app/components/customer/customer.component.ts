import { Component, OnInit } from '@angular/core';
import { CustomerDetailDto } from 'src/app/models/dto/customerDetailDto';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customersDetails:CustomerDetailDto[]=[]
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomersDetails()
  }
  getCustomersDetails(){
    this.customerService.getCustomersDetails().subscribe(response=>{
      this.customersDetails=response.data
    })
  }
}
