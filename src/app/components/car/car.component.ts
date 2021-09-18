import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { CarDetailDto } from 'src/app/models/dto/carDetailDto';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}
  carsDetails: CarDetailDto[];
  colors: Color[];
  brands: Brand[];
  currentBrandId: number = 0;
  currentColorId: number = 0;
  filterText: string;
  dataLoaded = false;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsDetailsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsDetailsByColor(params['colorId']);
      } else {
        this.getCarsDetails();
      }
    });
    this.getColors();
    this.getBrands();
  }

  //#region GetCarsDetails

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carsDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailsByBrand(brandId: number) {
    this.carService.getCarsDetailsByBrand(brandId).subscribe((response) => {
      this.carsDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailsByColor(colorId: number) {
    this.carService.getCarsDetailsByColor(colorId).subscribe((response) => {
      this.carsDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailsByColorIdAndBrandId(
    currentColorId: number,
    currentBrandId: number
  ) {
    if (currentBrandId==0 || currentColorId == 0) {
      return 
    }
    this.carService
      .getCarsDetailsByColorIdAndBrandId(currentColorId, currentBrandId)
      .subscribe((response) => {
        this.carsDetails = response.data;
      });
  }
  //#endregion
  //#region GetBrandsAndColors
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  //#endregion
}
