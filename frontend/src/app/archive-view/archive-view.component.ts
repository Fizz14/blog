import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';
import { MenuService } from '../menu.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-archive-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive-view.component.html',
  styleUrl: './archive-view.component.css'
})
export class ArchiveViewComponent {
  navigationIndexEndpoint: number = 0;
  searchResults: Post[] = [];

  constructor(private navigationService: NavigationService, private postService: PostService, private menuService: MenuService) { }

  ngOnInit() {
    this.navigationService.navIndex.subscribe((newView) => {
      this.navigationIndexEndpoint = newView;
    });
  }

  searchButtonClicked() {
    const inputElement = document.getElementById("searchInput") as HTMLInputElement;
    const searchTerm = inputElement.value;

    this.postService.searchPosts(searchTerm).subscribe((data: Post[]) => {
      this.searchResults = data;
    });

  }

  goToArticle(index: number) {
    console.log("Go to article " + index);
    this.navigationService.changeView(1);
    this.menuService.changeArticle(index-1);
  }

}
