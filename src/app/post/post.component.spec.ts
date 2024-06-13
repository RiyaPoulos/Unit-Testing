import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { Post } from '../models/post';
import { first } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render the post title of the anchor element', () => {
   
    const post: Post = { id: 1, body: 'body 1', title: 'dsdsd' };
    component.post=post;
    fixture.detectChanges();
    const postElement:HTMLElement=fixture.nativeElement;
    const a=postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  });

  it('should render the post title of the anchor element using debug element', () => {
   
    const post: Post = { id: 1, body: 'body 1', title: 'dsdsd' };
    component.post=post;
    fixture.detectChanges();
    const postdebugElement=fixture.debugElement;
    const a=postdebugElement.query(By.css('a')).nativeElement;
    expect(a?.textContent).toContain(post.title);
  });

  it('should raise an event when the delete post is clicked', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'dsdsd' };
    component.post = post; // Set the post property on the component
    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    component.onDeletePost(new MouseEvent('click'));
  });
});
