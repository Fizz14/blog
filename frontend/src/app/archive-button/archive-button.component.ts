import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archive-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive-button.component.html',
  styleUrl: './archive-button.component.css'
})
export class ArchiveButtonComponent {

  navigationIndexEndpoint: number = 0;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.navIndex.subscribe((newView) => {
      this.navigationIndexEndpoint = newView;
    });
  }

  archiveButtonClicked() {
    this.navigationService.changeView(2);
  }
}
