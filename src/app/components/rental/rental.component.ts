import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/dto/rentalDetailDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss'],
})
export class RentalComponent implements OnInit {
  constructor(private rentalService: RentalService) {}
  rentalsDetails: RentalDetailDto[] = [];
  ngOnInit(): void {
    this.getRentalsDetails();
  }
  getRentalsDetails() {
    this.rentalService.getRentalsDetails().subscribe((response) => {
      this.rentalsDetails = response.data;
    });
  }
}
