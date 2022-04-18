import { CityService } from './../../services/city.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-city-details',
  templateUrl: './view-city-details.component.html',
  styleUrls: ['./view-city-details.component.scss']
})
export class ViewCityDetailsComponent implements OnInit {
  @ViewChild('viewModal') viewRef:any;
  cityDetails:any;
  constructor(private modalService:NgbModal,
              private cityService:CityService) { }

  ngOnInit(): void {
    this.cityService.viewDetails$.subscribe(data=>{
      this.cityDetails=data;
      console.log(this.cityDetails);
      this.openModal(this.viewRef);
    })
  }
  openModal(targetModal: NgbModal) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }
  
}
