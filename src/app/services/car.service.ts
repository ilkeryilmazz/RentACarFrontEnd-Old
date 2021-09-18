import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/dto/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'https://localhost:44307/api/';

  constructor(private httpClient: HttpClient) {}

  getCarsDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsDetailsByBrand(
    brandId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrandid?branId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
  getCarsDetailsByColorIdAndBrandId(colorId:number,brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycoloridandbrandid?colorId="+colorId+"&brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
}
