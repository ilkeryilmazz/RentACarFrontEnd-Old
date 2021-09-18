import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
  constructor(private colorService: ColorService) {}
  colors: Color[];
  currentColor:Color
  filterText:string
  ngOnInit(): void {
    this.getColors()
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  setCurrentColor(color:Color){
    this.currentColor=color
  }
  clearCurrentColor(){
    this.currentColor={id:0,name:"Tüm Renkler"}
  }
  getAllColorClass(){
    if (!this.currentColor || this.currentColor.id===0) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  getCurrentColorClass(color:Color){
    if (this.currentColor===color) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}
