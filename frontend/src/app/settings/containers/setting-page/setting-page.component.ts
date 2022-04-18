import { inject } from '@angular/core/testing';
import { CityService } from './../../services/city.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CityListComponent } from '../../components/city-list/city-list.component';
@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit {
  isOpened:boolean=false;
  constructor(private modal:NgbModal,
              private cityService:CityService) { }
  
  ngOnInit(): void {

  }
  showModalCity(){
    this.cityService.emitModal(null);
  }
  toggle(){
    this.isOpened=!this.isOpened;
   }
  isOpen(){
    return this.isOpened;

  }
}
