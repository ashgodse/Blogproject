import { Component } from '@angular/core';
import { BlogServicesService } from 'src/app/services/blog-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private service: BlogServicesService) {
    this.allBlogs();
  }

  blogArray: any[] = [];

  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "createdDate": "",
    "name": "",
    "position": "",
    "profileSummary": "",
    "facebookUrl": "",
    "linkdinUrl": "",
    "profilePhotoUrl": "",
    "city": ""
  }

  allBlogs() {
    this.service.getAllBlog().subscribe((res: any) => {
      this.blogArray = res.data;
    })
  }

  createdUser() {
    this.service.createUsers(this.userObj).subscribe((res: any) => {
      alert(res.message);
      this.closeBtn();
    })
  }

  closeBtn() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "createdDate": "",
      "name": "",
      "position": "",
      "profileSummary": "",
      "facebookUrl": "",
      "linkdinUrl": "",
      "profilePhotoUrl": "",
      "city": ""
    }
  }


}
