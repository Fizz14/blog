import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-button.component.html',
  styleUrl: './home-button.component.css'
})
export class HomeButtonComponent {

  navigationIndexEndpoint: number = 0;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.navIndex.subscribe((newView) => {
      this.navigationIndexEndpoint = newView;
    });
  }

  homeButtonClicked() {
    this.navigationService.changeView(0);
  }


}
