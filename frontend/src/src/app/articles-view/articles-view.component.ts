import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../navigation.service';
import { PostService } from '../post.service';
import { MenuService } from '../menu.service';
import { articleData } from '../articleData';
import { EntryComponent } from '../entry/entry.component';
import { MenuComponent } from '../menu/menu.component';
import { Post } from '../post.model';

@Component({
  selector: 'app-articles-view',
  standalone: true,
  imports: [CommonModule, EntryComponent, MenuComponent],
  templateUrl: './articles-view.component.html',
  styleUrl: './articles-view.component.css'
})
export class ArticlesViewComponent {
  navigationIndexEndpoint: number = 0;
  menuIndexEndpoint: number = 0;
  posts: Post[] = [];
  allPosts: Post[] = [];
  categories: String[] = [];
  activePost: Post = {id:1, title:'',content:'',category:'',postedDate:''};
  numPosts: Number = 0;

  constructor(private navigationService: NavigationService, private postService: PostService, private menuService: MenuService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((data: Post[]) => {
      this.allPosts = data;

      console.log("NUmber of posts:");
      console.log(this.allPosts.length);
      this.menuService.setNumPosts(this.allPosts.length);

      console.log(this.posts.length);
      for(let i = 0; i < this.allPosts.length; i++) {
        this.categories.push(this.allPosts[i].category);
      }

      this.categories = Array.from(new Set(this.categories));

      this.activePost = this.allPosts[0];
    });

    this.navigationService.navIndex.subscribe((newView) => {
      this.navigationIndexEndpoint = newView;
    });
    this.menuService.articleIndex.subscribe((newIndex) => {
      this.menuIndexEndpoint = newIndex;
      this.activePost = this.allPosts[this.menuIndexEndpoint];
    });


  }

  changeCategory(category: String): void {
    console.log("Change category to", category);
    this.posts = [];
    for(let i = 0; i < this.allPosts.length; i++) {
      if(this.allPosts[i].category == category) {
        this.posts.push(this.allPosts[i]);
      }
    }
    this.posts.reverse();
  }
}
