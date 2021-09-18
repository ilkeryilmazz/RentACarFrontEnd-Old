import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImages } from '../models/carImages';
import { CarDetailDto } from '../models/dto/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = 'https://localhost:44307/api/';
  getCarDetails(carId: number): Observable<SingleResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath);
  }
  getCarImages(carId: number): Observable<ListResponseModel<CarImages>> {
    let newPath = this.apiUrl + 'carImages/getimagesbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }
}
