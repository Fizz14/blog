import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  fhover: Number = 0;
  phover: Number = 0;
  nhover: Number = 0;
  lhover: Number = 0;

  articleIndexEndpoint: number = 0;
  numPosts: number = 0;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.articleIndex.subscribe((newIndex) => {
      this.articleIndexEndpoint = newIndex; });

  }

  firstArticle() {
    this.menuService.firstArticle();
  }

  previousArticle() {
    this.menuService.changeArticle(this.articleIndexEndpoint - 1);
  }

  randomArticle() {
    this.menuService.randomArticle();
    this.numPosts = this.menuService.getNumPosts();
  }

  nextArticle() {
    this.menuService.changeArticle(this.articleIndexEndpoint + 1);
    this.numPosts = this.menuService.getNumPosts();
  }

  lastArticle() {
    this.menuService.lastArticle();
    this.numPosts = this.menuService.getNumPosts();
  }
}
