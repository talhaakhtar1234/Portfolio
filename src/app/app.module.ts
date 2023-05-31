import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ZeroSectionComponent } from './zero-section/zero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { ExpSectionComponent } from './exp-section/exp-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ZeroSectionComponent,
    AboutSectionComponent,
    SkillSectionComponent,
    EducationSectionComponent,
    WorkSectionComponent,
    ExpSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
