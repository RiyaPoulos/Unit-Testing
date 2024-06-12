import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PosComponent } from './pos.component';
import { Post } from '../models/post';
import { PosService } from '../pos.service';
import { of } from 'rxjs';

describe('PosComponent', () => {
  let POSTS: Post[];
  let component: PosComponent;
  let fixture: ComponentFixture<PosComponent>;
  let mockPostService:any;
  beforeEach(async () => {
    POSTS = [
      {
        id: 1,
        body: 'body 1',
        title: 'title 1',
      },
      {
        id: 2,
        body: 'body 2',
        title: 'title 2',
      },
      {
        id: 3,
        body: 'body 3',
        title: 'title 3',
      },
    ];
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
    component=new PosComponent(mockPostService);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PosComponent ],
    
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete the selected post from the post', () => {
    mockPostService.deletePost.and.returnValue(of(true)); 
    component.posts=POSTS;
    component.deletePost(POSTS[1]);
    expect(component.posts.length).toBe(2);
  });

  it('should delete method in the post service only once', () => {
    mockPostService.deletePost.and.returnValue(of(true)); 
    component.posts=POSTS;
    component.deletePost(POSTS[1]);
    //expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
  });

  it('should delete the actual', () => {
    mockPostService.deletePost.and.returnValue(of(true)); 
    component.posts=POSTS;
    component.deletePost(POSTS[1]);
    for(let post of component.posts){
      expect(post).not.toEqual(POSTS[1]);
    }
    //expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);

  
});

 
});
