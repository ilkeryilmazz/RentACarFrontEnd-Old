import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/dto/carDetailDto';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CarImages } from 'src/app/models/carImages';
import { RentalService } from 'src/app/services/rental.service';
import { Rental } from 'src/app/models/rental';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  carDetail:CarDetailDto
  imageBase="https://localhost:44307/Uploads/Images/"
  defaultImage="https://localhost:44307/Uploads/Images/DefaultImage.png"
  dataLoaded:boolean
  carImages:CarImages[]
  rentals:Rental[]

  constructor(private rentalService:RentalService,private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute, public _DomSanitizationService: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.getCarDetails(params["carId"])
        this.getCarImages(params["carId"])
      } else {
        console.log("hata")
      }
    })
  }
  getActiveImageClass(carImage:CarImages){
    if (carImage===this.carImages[0]) {
      return "active"
    } else {
      return ""
    }
  }
  getCarImages(carId:number){
    this.carDetailService.getCarImages(carId).subscribe(response=>{
      this.carImages=response.data
      console.log(this.carImages)
    })
  }
  getCarDetails(carId:number){
    this.carDetailService.getCarDetails(carId).subscribe(response=>{
      this.carDetail=response.data
      this.dataLoaded=true
    })
  }
  getRentalsByCarId(carId:number){
    this.rentalService.getRentalsByCarId(carId).subscribe(response=>{
      this.rentals=response.data
    })
  }
}
