import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { articleData } from '../articleData';
import { EntryComponent } from '../entry/entry.component';
import { Post } from '../post.model';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, EntryComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
  navigationIndexEndpoint: number = 0;
  posts: Post[] = [];

  constructor(private navigationService: NavigationService, private postService: PostService) { }

  ngOnInit() {
    this.postService.getRecentPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });

    this.navigationService.navIndex.subscribe((newView) => {
      this.navigationIndexEndpoint = newView;
    });
  }
}
