import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { CommonModule } from '@angular/common';
import { CardComponent} from '../card/card.component';

@Component({
  selector: 'app-downloads-view',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './downloads-view.component.html',
  styleUrl: './downloads-view.component.css'
})
export class DownloadsViewComponent {
  navigationIndexEndpoint: number = 0;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.navIndex.subscribe((newView) => {
      this.navigationIndexEndpoint = newView;
    });
  }

}
