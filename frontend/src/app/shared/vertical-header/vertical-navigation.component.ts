import { DataService } from './../services/data.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/services/auth.service';
import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html'
})
export class VerticalNavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

    // This is for Notifications
    notifications: Object[] = [

      {
        btn: 'btn-primary',
        icon: 'ti-user',
        title: 'Hello to your new account',
        subject: 'Try to add new contacts',
        time: '9:00 AM'
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
  }]
  fullName:string ="";
  username:string ="";
  constructor(private modalService: NgbModal,private translate: TranslateService, private authService: AuthService, private router: Router, private dataService: DataService) {
    this.fullName = dataService.currentUser.firstName + " " + dataService.currentUser.lastName 
    this.username = dataService.currentUser.username
    translate.setDefaultLang('en');
  }


  ngAfterViewInit() {}

  changeLanguage(lang: any) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
  }

  logout() {
      localStorage.removeItem('id');
      localStorage.removeItem('username');
      localStorage.removeItem('doj');

      localStorage.removeItem('exp');
      localStorage.removeItem('jwt');
      localStorage.removeItem('lastlog');
      this.router.navigate(["/login"]);
  }
  get currentDate(){
    return localStorage.getItem('lastlog');
  }
  get doj(){
    return localStorage.getItem('doj');
  }
  get user(){
    return localStorage.getItem('username');
  }
}
