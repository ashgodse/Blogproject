import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { SingleBlogComponent } from './templates/single-blog/single-blog.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  // { path: "login", component: LoginuserComponent },
  {
    path: "", component: NavbarComponent,
    children: [
      { path: "singleBlog/:id", component: SingleBlogComponent },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
