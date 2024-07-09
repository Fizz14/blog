import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles-button.component.html',
  styleUrl: './articles-button.component.css'
})
export class ArticlesButtonComponent {

  navigationIndexEndpoint: number = 0;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.navIndex.subscribe((newView) => {
      this.navigationIndexEndpoint = newView;
    });
  }

  articlesButtonClicked() {
    this.navigationService.changeView(1);
  }


}
