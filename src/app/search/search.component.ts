import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  public API_KEY: string = 'AIzaSyAv9SveXc91NBavZeo6xUjJ1Hl0xM81p8U';
  public webDevURL: string;
  public searchQuery: string;
  public channel: any;

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    private titleService: Title){

  	this.route.queryParams.subscribe(params => {
  		this.searchQuery = params['q'];

      if( !this.searchQuery ){
        this.searchQuery = ""
      }

  		this.webDevURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + this.searchQuery + '&key=' + this.API_KEY;
      console.log(params)

      this.http.get(this.webDevURL).subscribe(response => {
        this.channel = response;
        this.titleService.setTitle( "Search results for \"" + this.searchQuery + "\" - Youtube University" );
      });

    });

  }

  ngOnInit(){
    
  }

  imageFadeIn(el){
    el.style.opacity = 1
  }

}
