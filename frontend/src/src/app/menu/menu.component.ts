import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  articleIndexEndpoint: number = 0;

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
  }

  nextArticle() {
    this.menuService.changeArticle(this.articleIndexEndpoint + 1);
  }

  lastArticle() {
    this.menuService.lastArticle();
  }
}
