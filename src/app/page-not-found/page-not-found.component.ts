import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
  	private location: Location,
    private titleService: Title){

  	this.titleService.setTitle( '404 - Page Not Found - Youtube University' );
  	
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
