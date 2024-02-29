import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Day1/navbar/navbar.component';
import { FooterComponent } from './components/Day1/footer/footer.component';
import { AsideComponent } from './components/Day1/aside/aside.component';
import { SliderComponent } from './components/Day1/slider/slider.component';
import { ProjectComponent } from './components/Day1/project/project.component';
import { SliderTSComponent } from './components/Day2/slider-ts/slider-ts.component';
import { StudentRegComponent } from './components/Day2/student-reg/student-reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './components/Day3/parent/parent.component';
import { ProductFormComponent } from './components/Day3/Children/product-form/product-form.component';
import { ProductDisplayComponent } from './components/Day3/Children/product-display/product-display.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    SliderComponent,
    ProjectComponent,
    SliderTSComponent,
    StudentRegComponent,
    ParentComponent,
    ProductFormComponent,
    ProductDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
