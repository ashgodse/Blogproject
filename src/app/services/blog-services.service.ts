import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServicesService {

  constructor(private http:HttpClient) { 
    
  }

  getAllBlog(): Observable<any> {
    return this.http.get("http://onlinetestapi.gerasim.in/api/Blog/GetAllBlogs");
  }

  getBlogById(id: any): Observable<any> {
    return this.http.get("http://onlinetestapi.gerasim.in/api/Blog/GetBlogById?blogid=" + id);
  }

  getBlogByUserId(id: any): Observable<any> {
    return this.http.get("http://onlinetestapi.gerasim.in/api/Blog/GetAllBlogsByUserId?id=" + id);
  }

  getAllUsers(): Observable<any> {
    return this.http.get("http://onlinetestapi.gerasim.in/api/Blog/GetAllUser");
  }

  createUsers(obj: any): Observable<any> {
    return this.http.post("http://onlinetestapi.gerasim.in/api/Blog/CreateUser", obj);
  }

  loginUser(obj: any): Observable<any> {
    return this.http.post("http://onlinetestapi.gerasim.in/api/Blog/login", obj);
  }

  userDetailsById(id: any): Observable<any> {
    return this.http.get("http://onlinetestapi.gerasim.in/api/Blog/GetUserDetailsById?id=" + id);
  }

  commentByBlogId(id: any): Observable<any> {
    return this.http.get("http://onlinetestapi.gerasim.in/api/Blog/GetCommentsByBlogId?blogid=" + id);
  }

  addComment(obj: any): Observable<any> {
    return this.http.post("http://onlinetestapi.gerasim.in/api/Blog/addComment", obj);
  }
}
