import { DataService } from './../services/data.service';
import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-horizontal-navigation',
  templateUrl: './horizontal-navigation.component.html'
})
export class HorizontalNavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  public isCollapsed = false;
  public showMobileMenu = false;

  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Welcome to your account!',
      subject: 'Try to add new contacts',
      time: '9:30 AM'
    }

  ];

  // This is for Mymessages
  mymessages: Object[] = [
   
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Admin',
      subject: 'Hello User ! Nice to meet you',
      time: '9:00 AM'
    }
  ];


  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'French',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Spanish',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'German',
    code: 'de',
    icon: 'de'
  }]

  fullName:string ="";
  username:string ="";
  constructor(private modalService: NgbModal, private translate: TranslateService, private dataService: DataService) {

    this.fullName = dataService.currentUser.firstName + " " + dataService.currentUser.lastName 
    this.username = dataService.currentUser.username

    translate.setDefaultLang('en');

  }

  ngAfterViewInit() { }

  changeLanguage(lang: any) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
  }
}
