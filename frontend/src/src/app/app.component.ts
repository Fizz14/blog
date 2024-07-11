import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeButtonComponent } from './home-button/home-button.component';
import { ArticlesButtonComponent } from './articles-button/articles-button.component';
import { DownloadsButtonComponent } from './downloads-button/downloads-button.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { DownloadsViewComponent } from './downloads-view/downloads-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeButtonComponent, ArticlesButtonComponent, DownloadsButtonComponent, HomeViewComponent, ArticlesViewComponent, DownloadsViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Brainbox';
}
