import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PosService } from '../pos.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
posts:Post[]=[];
  constructor(private posservice:PosService) { }

  ngOnInit(): void {
    this.getPosts();
  }
getPosts(){
  this.posservice.getPosts().subscribe((posts)=>{
    this.posts=posts;
  })

}
deletePost(post:Post){
  this.posts=this.posts.filter((p)=>p.id!=post.id);
  this.posservice.deletePost(post).subscribe();

}
}
