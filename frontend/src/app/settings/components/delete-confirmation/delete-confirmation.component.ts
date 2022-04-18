import { CityService } from './../../services/city.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {
  @ViewChild('deletemodal') deleteModalRef:any;
  deleteId:any;

  constructor(
    private modalService:NgbModal,
    private cityService:CityService){

    }

  ngOnInit(): void {
    this.cityService.delete$.subscribe(data=>{
      this.openModal(this.deleteModalRef);
      this.deleteId= data;

    })


  }
  delete(){
    this.cityService.deleteCity(this.deleteId).subscribe(data=>{
      console.log(this.deleteId);
        this.cityService.deleteCityTotbl(this.deleteId);
    })
  }
  openModal(targetModal: NgbModal) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
  }

}
