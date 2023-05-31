import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BlogServicesService } from '../services/blog-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:BlogServicesService,private router:Router){
    this.getBlogs();
  }


  blogsArray: any[] = [];

  getBlogs() {
    this.service.getAllBlog().subscribe((res: any) => {
      this.blogsArray = res.data;
    })
  }

  getBlogId(id: any) {
    // console.log(id);
    this.router.navigate(['/singleBlog', id]);

  }
  getUsers() {
    this.service.getAllUsers().subscribe((res: any) => {
      console.log(res);
    })
  }

}
