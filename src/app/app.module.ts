import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewPageComponent } from './pages/review-page/review-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddQuestionComponent,
    ReviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
