import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.sass']
})
export class VideoItemComponent implements OnInit {

  public item: any;
  public url: string;

  public API_KEY: string = 'AIzaSyAv9SveXc91NBavZeo6xUjJ1Hl0xM81p8U';
  // public webDevURL: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' +  this.route.snapshot.paramMap.get('channelId') + '&key=' + this.API_KEY;
  // public channel: any;



  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private titleService: Title
  ) { }

  ngOnInit() {
  	this.url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=' + this.route.snapshot.paramMap.get('videoId') + '&key=' + this.API_KEY;

  	this.http.get(this.url).subscribe(response => {
    	this.item = response;

      this.titleService.setTitle( this.item.items[0].snippet.title + ' - Youtube University' );

  	});
  }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.items[0].id);
  }

}
