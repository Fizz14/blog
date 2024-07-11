import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private allUrl = 'http://127.0.0.1:8080/api/posts/all';
  private recentUrl = 'http://127.0.0.1:8080/api/posts/recent';
  private searchUrl = 'http://127.0.0.1:8080/api/posts/search';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.allUrl);
  }

  getRecentPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.recentUrl);
  }
  
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.allUrl, post);
  }
}
