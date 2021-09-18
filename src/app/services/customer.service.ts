import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDto } from '../models/dto/customerDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'https://localhost:44307/api/Customers/getcustomerdetails';
  constructor(private httpClient: HttpClient) {}

  getCustomersDetails(): Observable<ListResponseModel<CustomerDetailDto>> {
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.apiUrl);
  }
}
