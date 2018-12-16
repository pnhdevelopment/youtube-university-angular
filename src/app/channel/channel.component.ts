import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.sass']
})
export class ChannelComponent implements OnInit {
  
  
  public API_KEY: string = 'AIzaSyAv9SveXc91NBavZeo6xUjJ1Hl0xM81p8U';
  public webDevURL: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' +  this.route.snapshot.paramMap.get('channelId') + '&key=' + this.API_KEY;
  public channel: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

  	this.http.get(this.webDevURL).subscribe(response => {
    	this.channel = response;
  	});

  }

  imageFadeIn(el){
    el.style.opacity = 1
  }

}
