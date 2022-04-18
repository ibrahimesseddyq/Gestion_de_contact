import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  contactList :any = [];
  filterArray:any= [];
 

  config: any;



  page = 1;
  pageSize = 5;

  constructor(private cityService:CityService,
              ) { 


  }

  ngOnInit(): void {
    console.log(localStorage.getItem('username'));
    this.cityService.getCities(localStorage.getItem('id')).subscribe((data:any)=>{
      this.contactList=data
      console.log(data);
      setTimeout(()=>{
        this.filterArray = this.contactList;
        console.log( this.contactList);
      },0) 
    })
    this.cityService.addCityTotable$.subscribe(data=>{
      setTimeout(()=>{
        console.log(data);
        this.filterArray.push(data);
      },100);
    })
    this.cityService.deleteCityTotable$.subscribe(data=>{
      setTimeout(()=>{
        console.log(data);
        this.filterArray= this.filterArray.filter((e:any)=>e.id!=data);
        console.log(this.filterArray)
      },100);
    })
    console.log(this.filterArray)


  }
  showViewModal(city:any){
    this.cityService.emitViewModal(city);
  }
    showUpdateModal(city:any){
      this.cityService.emitModal(city);
    }
  deleteContact(id:any){
    this.cityService.deleteModalCity(id);

  }
}
