import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NagbarComponent } from './MyComponents/nagbar/nagbar.component';
import { ImageSlideComponent } from './MyComponents/image-slide/image-slide.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactUsComponent } from './MyComponents/contact-us/contact-us.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NagbarComponent,
    ImageSlideComponent,
    AboutComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
