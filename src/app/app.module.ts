import { BrowserModule, Title }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { ChannelComponent } from './channel/channel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
  { path: 'search',                             component: SearchComponent },
  { path: 'video/:videoId',                     component: VideoItemComponent },
  { path: 'channel/:channelName/:channelId',    component: ChannelComponent },
  { path: '',                                   component: HomeComponent },
  { path: '**',                                 component: PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VideoItemComponent,
    ChannelComponent,
    PageNotFoundComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
