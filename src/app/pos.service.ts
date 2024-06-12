import { Injectable } from '@angular/core';
import { Post } from './models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosService {

  constructor( private http:HttpClient) { }
  getPosts(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

  }
  deletePost(post:Post){
    return this.http.delete('https://jsonplaceholder.typicode.com/post/${post.id}');

  }
}
