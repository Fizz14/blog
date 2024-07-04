import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-downloads-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './downloads-button.component.html',
  styleUrl: './downloads-button.component.css'
})
export class DownloadsButtonComponent {

  navigationIndexEndpoint: number = 0;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.navIndex.subscribe((newView) => {
      this.navigationIndexEndpoint = newView;
    });
  }

  downloadsButtonClicked() {
    this.navigationService.changeView(1);
  }

}
