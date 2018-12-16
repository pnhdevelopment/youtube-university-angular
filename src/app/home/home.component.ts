import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})


export class HomeComponent implements OnInit {

  public webDevChannels: any;
  public webDesignChannels: any;

  public webDevURL: string;
  public webDesignURL: string;

  public API_KEY: string = 'AIzaSyAv9SveXc91NBavZeo6xUjJ1Hl0xM81p8U';

  public webDevChannelIds: string = 'UCoebwHSTvwalADTJhps0emA,UCyIe-61Y8C4_o-zZCtO4ETQ,UCO1cgjhGzsSYb1rsB4bFe4Q,UCW5YeuERMmlnqo4oq8vwUpg,UC29ju8bIPH5as8OGnQzwJyA';
  
  public webDesignChannelIds: string = 'UCvBGFeXbBrq3W9_0oNLJREQ,UCyU5wkjgQYGRB0hIHMwm2Sg,UCVyRiMvfUNMA1UPlDPzG5Ow,UC-b3c7kxa5vU-bnmaROgvog,UCIp9sEZiv36cDG7cEnrVU7Q,UC64eec0UYHxflyEWgyZOvLA';


  constructor(private http: HttpClient) { }

  ngOnInit() {

  	this.webDevURL = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + this.webDevChannelIds + '&key=' + this.API_KEY;
  	this.webDesignURL = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + this.webDesignChannelIds + '&key=' + this.API_KEY;

  	this.http.get(this.webDevURL).subscribe(response => {
    	this.webDevChannels = response;
  	});

  	this.http.get(this.webDesignURL).subscribe(response => {
    	this.webDesignChannels = response;
  	});

  }

  imageFadeIn(el){
    el.style.opacity = 1
  }




}
