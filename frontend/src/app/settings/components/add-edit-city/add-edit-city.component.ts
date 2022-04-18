import { CityService } from './../../services/city.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-add-edit-city',
  templateUrl: './add-edit-city.component.html',
  styleUrls: ['./add-edit-city.component.scss']
})
export class AddEditCityComponent implements OnInit {
  filterArray:any= [];
  contactDetail :any;
  temp:any;
  isUpdate:any;
  @ViewChild('editUserModal') myModalRef:any;

  editContact: any= {};

  constructor(private modalService:NgbModal,
              private cityService: CityService) {
                this.editContact = new FormGroup({
                  id:new FormControl('',[Validators.required]),
                  name: new FormControl('',[Validators.required]),
                  phone: new FormControl('',[Validators.required]),
                  email:new FormControl('',[Validators.required]),
                  adress:new FormControl('',[Validators.required])
            
                })
               }

  ngOnInit(): void {

    this.cityService.modal$.subscribe(data=>{
      this.contactDetail = data;
      console.log("HIIII");
      console.log(this.contactDetail);

      this.openModal(this.myModalRef);
    })
  }
  openModal(targetModal: NgbModal) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
    this.editContact.reset();
    this.isUpdate=false;

    if(this.contactDetail){
      this.isUpdate=true;
      console.log("a:");
      console.log(this.contactDetail.contactid);
      this.editContact?.patchValue({
        id:this.contactDetail.contactid,
        name: this.contactDetail.name,
        email: this.contactDetail.email,
        phone: this.contactDetail.phone,
        adress: this.contactDetail.adress,

    });
    console.log(this.editContact);
    }
  }
  onSubmit() {
    if (this.contactDetail) {
        if (this.editContact != null) {
          this.contactDetail.contactid = this.editContact.get('id')?.value;
            this.contactDetail.name = this.editContact.get('name')?.value;
            this.contactDetail.phone = this.editContact.get('phone')?.value;
            this.contactDetail.email = this.editContact.get('email')?.value;
            this.contactDetail.adress = this.editContact.get('adress')?.value;

        }

        console.log(this.contactDetail);
        this.cityService.updateCity(this.contactDetail.contactid, this.contactDetail).subscribe((data)=>{
          console.log(data);
        });
    } else {
      this.contactDetail={}
        this.contactDetail.name = this.editContact?.get('name')?.value;
        this.contactDetail.phone = this.editContact?.get('phone')?.value;
        this.contactDetail.email = this.editContact?.get('email')?.value;
        this.contactDetail.adress = this.editContact?.get('adress')?.value;

      this.temp={id:localStorage.getItem('id'),...this.contactDetail};

        this.cityService.postCity(this.temp).subscribe((data)=>{
          console.log("contactDetails "+this.contactDetail);
          this.cityService.addCityTotbl(this.temp);
        });
        this.filterArray.splice(0, 0, this.contactDetail);

    }
    this.modalService.dismissAll();
    this.contactDetail = null;

    this.ngOnInit();

}
closeBtnClick() {
  this.modalService.dismissAll();
  this.ngOnInit();
}

}
