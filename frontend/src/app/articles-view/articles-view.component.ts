import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { articleData } from '../articleData';
import { EntryComponent } from '../entry/entry.component';
import { Post } from '../post.model';

@Component({
  selector: 'app-articles-view',
  standalone: true,
  imports: [CommonModule, EntryComponent],
  templateUrl: './articles-view.component.html',
  styleUrl: './articles-view.component.css'
})
export class ArticlesViewComponent {
  navigationIndexEndpoint: number = 0;
  posts: Post[] = [];

  constructor(private navigationService: NavigationService, private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });

    this.navigationService.navIndex.subscribe((newView) => {
      this.navigationIndexEndpoint = newView;
    });
  }
}
