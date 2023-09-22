import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ReviewPageComponent } from './pages/review-page/review-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "form",
    pathMatch: "full"
  },
  {
    path: "form",
    component: MainPageComponent
  },
  {
    path: "review",
    component: ReviewPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
