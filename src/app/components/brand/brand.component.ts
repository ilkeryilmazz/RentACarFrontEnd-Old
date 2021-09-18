import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  brands: Brand[];
  filterText:string
  constructor(private brandService: BrandService) {}
  currentBrand: Brand;
  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }
  clearCurrentBrand(){
    this.currentBrand={id:0,name:"Tüm Markalar"}
  }
  getCurrentBrandClass(brand: Brand){
    if (this.currentBrand==brand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
  getAllBrandClass(){
    if (!this.currentBrand || this.currentBrand.id === 0) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
}
