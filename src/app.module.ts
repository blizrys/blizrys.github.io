import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { PhotographyPageComponent } from './photography-page/photography-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ContactmePageComponent } from './contactme-page/contactme-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProjectPageComponent,
    PhotographyPageComponent,
    ProfilePageComponent,
    ContactmePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
