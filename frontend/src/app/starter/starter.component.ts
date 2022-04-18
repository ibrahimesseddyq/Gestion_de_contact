import { Title } from '@angular/platform-browser';
import { Component, AfterViewInit, OnInit } from '@angular/core';
@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit, OnInit {
  subtitle: string;
  constructor(private titleService: Title) {
    this.subtitle = 'This is some text within a card block.';
  }

  
  ngOnInit() { 
    this.titleService.setTitle("WimOptic - Logiciel de gestion pour opticien");
  }
  ngAfterViewInit() {}
}
