import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDto } from '../models/dto/rentalDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root',
})
export class RentalService {
  private apiUrl = 'https://localhost:44307/api/';
  constructor(private httpClient: HttpClient) {}
 
  getRentalsDetails(): Observable<ListResponseModel<RentalDetailDto>> {
    let newPath= this.apiUrl+"Rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }
  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath= this.apiUrl+"Rentals/getbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
